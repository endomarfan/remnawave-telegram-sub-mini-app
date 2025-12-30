import { TSubscriptionPageAppConfig,
    TSubscriptionPageButtonConfig,
    TSubscriptionPagePlatformKey
} from '@remnawave/subscription-page-types'
import {
    Box,
    Button,
    ButtonVariant,
    Card,
    Group,
    Stack,
    Title,
    UnstyledButton
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useClipboard } from '@mantine/hooks'

import { IBlockRendererProps } from './components/blocks/rendererBlock.interface'
import classes from './InstallationGuide.module.css'
import { useSubscriptionConfig } from '@/store/subscriptionConfig'
import { useSubscription } from '@/store/subscriptionInfo'
import { getIconFromLibrary } from '@/utils/configParser'
import { TemplateEngine } from '@/utils/templateEngine'
import { vibrate } from '@/utils/vibrate'
import { useTranslation } from '@/hooks/useTranslations'
import { useAppConfigStoreInfo } from '@/store/appConfig'
import { retrieveLaunchParams } from '@telegram-apps/sdk-react'

export type TBlockVariant = 'accordion' | 'cards' | 'minimal' | 'timeline'

interface IProps {
    BlockRenderer: React.ComponentType<IBlockRendererProps>
    hasPlatformApps: Record<TSubscriptionPagePlatformKey, boolean>
}

export const InstallationGuideConnector = (props: IProps) => {
    const { hasPlatformApps, BlockRenderer } = props

    const { t, currentLang, baseTranslations } = useTranslation()

    const { platforms, svgLibrary } = useSubscriptionConfig()
    const { copy } = useClipboard({ timeout: 2_000 })
    const subscription = useSubscription()
    const { appConfig } = useAppConfigStoreInfo()
    const launchParams = retrieveLaunchParams()
    const { tgWebAppPlatform: tgPlatform } = launchParams
    const isTDesktop = tgPlatform === 'tdesktop'

    // Find first available platform and app
    const firstAvailablePlatform = (
        Object.keys(hasPlatformApps) as TSubscriptionPagePlatformKey[]
    ).find((key) => hasPlatformApps[key])
    
    const selectedPlatform = firstAvailablePlatform!
    const platformApps = platforms[selectedPlatform]!.apps
    const selectedApp = platformApps[0]

    const subscriptionUrl = subscription.subscriptionUrl

    const handleButtonClick = (button: TSubscriptionPageButtonConfig) => {
        let formattedUrl: string | undefined

        if (button.type === 'subscriptionLink' || button.type === 'copyButton') {
            const isCryptoActive = selectedApp.name === 'Happ' && appConfig?.cryptoLink

            if (isCryptoActive) {
                formattedUrl = subscriptionUrl
            } else {
                formattedUrl = TemplateEngine.formatWithMetaInfo(button.link, {
                    username: subscription.user.username,
                    subscriptionUrl
                })
            }
        }

        switch (button.type) {
            case 'copyButton': {
                if (!formattedUrl) return

                copy(formattedUrl)
                notifications.show({
                    title: t(baseTranslations.linkCopied),
                    message: t(baseTranslations.linkCopiedToClipboard),
                    color: 'brandOrange'
                })
                break
            }
            case 'external': {
                window.open(button.link, '_blank')
                break
            }
            case 'subscriptionLink': {
                if (!formattedUrl) return

                // hack-fix for telegram desktop client app. Doesn't support deeplink
                const fullUrl = isTDesktop
                    ? `${appConfig?.redirectLink}${formattedUrl}`
                    : formattedUrl
                window.open(fullUrl, '_blank')
                break
            }
            default:
                break
        }
    }

    const renderBlockButtons = (
        buttons: TSubscriptionPageButtonConfig[],
        variant: ButtonVariant
    ) => {
        if (buttons.length === 0) return null

        return (
            <Group gap="xs" wrap="wrap">
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        leftSection={
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: getIconFromLibrary(button.svgIconKey, svgLibrary)
                                }}
                                style={{ display: 'flex', alignItems: 'center' }}
                            />
                        }
                        onClick={() => handleButtonClick(button)}
                        radius="md"
                        variant={variant}
                    >
                        {t(button.text)}
                    </Button>
                ))}
            </Group>
        )
    }

    const getIcon = (iconKey: string) => getIconFromLibrary(iconKey, svgLibrary)

    return (
        <Card
            className="glass-card"
            p={{ base: 'sm', xs: 'md', sm: 'lg', md: 'xl' }}
            radius="lg"
            style={{ zIndex: 3 }}
        >
            <Stack gap="md">
                <Group gap="sm" justify="space-between">
                    <Title c="white" fw={600} order={4}>
                        {t(baseTranslations.installationGuideHeader)}
                    </Title>
                </Group>

                {selectedApp && (
                    <BlockRenderer
                        blocks={selectedApp.blocks}
                        currentLang={currentLang}
                        getIconFromLibrary={getIcon}
                        renderBlockButtons={renderBlockButtons}
                        svgLibrary={svgLibrary}
                    />
                )}
            </Stack>
        </Card>
    )
}
