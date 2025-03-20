import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './TextInput.styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string,
    placeholder?: string,
    disabled?: boolean,
}

export function TextInput({ prefix, ...props }: TextInputProps) {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props} />
        </TextInputContainer>
    )
}