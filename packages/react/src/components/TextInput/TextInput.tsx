import { ComponentProps, ComponentRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './TextInput.styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
    prefix?: string,
    placeholder?: string,
    disabled?: boolean,
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(({ prefix, ...props }: TextInputProps, ref) => {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input ref={ref} {...props} />
        </TextInputContainer>
    )
})

TextInput.displayName = 'TextInput'