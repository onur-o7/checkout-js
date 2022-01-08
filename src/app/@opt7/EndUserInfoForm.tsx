import { SignInEmail } from '@bigcommerce/checkout-sdk';
import { withFormik, FieldProps, FormikProps } from 'formik';
import { noop } from 'lodash';
import React, { memo, useCallback, FC } from 'react';

import { Fieldset, Form, FormField, TextInput } from '../ui/form';

import './EndUserInfo.scss';
import EmailField from '../customer/EmailField';

export interface EndUserFormProps {
    email?: string;
    isOpen: boolean;
    isSendingEmail?: boolean;
    emailHasBeenRequested?: boolean;
    sentEmail?: SignInEmail;
    sentEmailError?: any;
    onRequestClose?(): void;
    onSendLoginEmail?(values: EndUserFormValues): void;
}
export interface EndUserFormValues {
    email: string;
    isOpen: boolean;
}

const EndUserInfoForm: FC<FormikProps<EndUserFormProps>> = () => {
    const renderInput = useCallback(
        ({ field }: FieldProps) => <TextInput {...field} autoComplete={'off'} maxLength={2000} />,
        []
    );

    return (
        <Form>
            <Fieldset additionalClassName="endUser-info-form">
                <EmailField />

                <FormField input={renderInput} label={'First Name'} name={'first_name'} />

                <FormField input={renderInput} label={'Last Name'} name={'last_name'} />
            </Fieldset>
        </Form>
    );
};

export default withFormik<EndUserFormProps, EndUserFormValues>({
    mapPropsToValues: ({ email = '', isOpen = true }) => ({
        email,
        isOpen
    }),
    handleSubmit: (values, { props: { onSendLoginEmail = noop } }) => {
        onSendLoginEmail(values);
    }
})(memo(EndUserInfoForm));
