import { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from '@rodrigokovalski-ui/react';

export default {
    title: 'Form/Box',
    component: Box,
    args: {
        children: <Text>Testando o elemento Box</Text>,
    },
    argTypes: {
        children: {
            control: {
                type: null,
            },
        },
    },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {}