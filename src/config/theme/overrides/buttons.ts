import { ActionIcon, Button } from '@mantine/core'

export default {
    ActionIcon: ActionIcon.extend({
        defaultProps: {
            variant: 'outline'
        }
    }),
    Button: Button.extend({
        defaultProps: {
            variant: 'outline'
        }
    })
}
