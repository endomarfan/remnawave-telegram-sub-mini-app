import { InputBase, PasswordInput, Select, TextInput } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'

export default {
    InputBase: InputBase.extend({
        defaultProps: {
            radius: 'lg'
        }
    }),
    PasswordInput: PasswordInput.extend({
        defaultProps: {
            radius: 'lg'
        }
    }),
    TextInput: TextInput.extend({
        defaultProps: {
            radius: 'lg'
        }
    }),
    Select: Select.extend({
        defaultProps: {
            radius: 'lg'
        }
    }),
    DateTimePicker: DateTimePicker.extend({
        defaultProps: {
            radius: 'lg'
        }
    })
}
