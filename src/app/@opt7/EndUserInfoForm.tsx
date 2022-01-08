import { SignInEmail } from '@bigcommerce/checkout-sdk';
import { withFormik, FormikProps } from 'formik';
import { noop } from 'lodash';
import React, { memo, FC } from 'react';

// eslint-disable-next-line import/no-internal-modules
import getEmailValidationSchema from '../app/customer/getEmailValidationSchema';
// eslint-disable-next-line import/no-internal-modules
import EmailField from '../app/customer/EmailField';
import { withLanguage, WithLanguageProps } from '../app/locale';
import { Form } from '../app/ui/form';

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
    return (
        <Form>
            <EmailField />
        </Form>
        );
};

export default withFormik<EndUserFormProps , EndUserFormValues>({
    mapPropsToValues: ({
                           email = '',
                            isOpen= true,
                       }) => ({
        email,
        isOpen,
    }),
    handleSubmit: (values, { props: { onSendLoginEmail = noop } }) => {
        onSendLoginEmail(values);
    },
})(memo(EndUserInfoForm));)
