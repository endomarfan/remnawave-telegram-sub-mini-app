import { Box, Group, Stack, Text, ThemeIcon } from '@mantine/core'
import {IInfoBlockProps} from "@/types/infoBlock";


const colorGradients: Record<string, { background: string; border: string }> = {
    blue: {
        background:
            'linear-gradient(135deg, rgba(34, 139, 230, 0.1) 0%, rgba(28, 126, 214, 0.05) 100%)',
        border: 'rgba(34, 139, 230, 0.25)'
    },
    cyan: {
        background:
            'linear-gradient(135deg, rgba(var(--brand-orange-rgb), 0.1) 0%, rgba(var(--brand-orange-rgb), 0.05) 100%)',
        border: 'rgba(var(--brand-orange-rgb), 0.25)'
    },
    green: {
        background:
            'linear-gradient(135deg, rgba(64, 192, 87, 0.1) 0%, rgba(55, 178, 77, 0.05) 100%)',
        border: 'rgba(64, 192, 87, 0.25)'
    },
    teal: {
        background:
            'linear-gradient(135deg, rgba(32, 201, 151, 0.1) 0%, rgba(18, 184, 134, 0.05) 100%)',
        border: 'rgba(32, 201, 151, 0.25)'
    },
    red: {
        background:
            'linear-gradient(135deg, rgba(var(--brand-orange-rgb), 0.1) 0%, rgba(var(--brand-orange-rgb), 0.05) 100%)',
        border: 'rgba(var(--brand-orange-rgb), 0.25)'
    },
    yellow: {
        background:
            'linear-gradient(135deg, rgba(250, 176, 5, 0.1) 0%, rgba(245, 159, 0, 0.05) 100%)',
        border: 'rgba(250, 176, 5, 0.25)'
    },
    orange: {
        background:
            'linear-gradient(135deg, rgba(var(--brand-orange-rgb), 0.1) 0%, rgba(var(--brand-orange-rgb), 0.05) 100%)',
        border: 'rgba(var(--brand-orange-rgb), 0.25)'
    },
    brandOrange: {
        background:
            'linear-gradient(135deg, rgba(var(--brand-orange-rgb), 0.1) 0%, rgba(var(--brand-orange-rgb), 0.05) 100%)',
        border: 'rgba(var(--brand-orange-rgb), 0.25)'
    },
    violet: {
        background:
            'linear-gradient(135deg, rgba(151, 117, 250, 0.1) 0%, rgba(132, 94, 247, 0.05) 100%)',
        border: 'rgba(151, 117, 250, 0.25)'
    }
}

export const InfoBlock = (props: IInfoBlockProps) => {
    const { color, icon, title, value } = props

    const gradient = colorGradients[color] || colorGradients.blue

    return (
        <Box
            p="md"
            style={{
                background: gradient.background,
                border: `1px solid ${gradient.border}`,
                borderRadius: 'var(--mantine-radius-md)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateZ(0)',
                willChange: 'transform'
            }}
            className="info-block-hover"
        >
            <Stack gap={4}>
                <Group gap={4} wrap="nowrap">
                    <ThemeIcon color={color} size="xs" variant="light" radius="sm">
                        {icon}
                    </ThemeIcon>
                    <Text fw={500} size="xs" c="dimmed" truncate>
                        {title}
                    </Text>
                </Group>
                <Text fw={600} size="sm" c="white" truncate>
                    {value}
                </Text>
            </Stack>
        </Box>
    )
}
