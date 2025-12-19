import { InputBase, PasswordInput, Select, TextInput } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'

export default {
    InputBase: InputBase.extend({
        defaultProps: {
            radius: 'xl'
        }
    }),
    PasswordInput: PasswordInput.extend({
        defaultProps: {
            radius: 'xl'
        }
    }),
    TextInput: TextInput.extend({
        defaultProps: {
            radius: 'xl'
        }
    }),
    Select: Select.extend({
        defaultProps: {
            radius: 'xl'
        }
    }),
    DateTimePicker: DateTimePicker.extend({
        defaultProps: {
            radius: 'xl'
        }
    })
}
