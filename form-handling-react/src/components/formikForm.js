import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function formikForm() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
    };
    const validationSchema = Yup.object({
        username: Yup.string("").required("Enter Your Username"),
        email: Yup.string("").required("Please Enter Your Email"),
        password: Yup.string().required("Enter Your Password").max(20, "Password should be less than 20 letters").min(6, "Password should be more than 6 letters"),
    });
    const onSubmit = () => {};
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {() => (
                    <Form>
                        <div>
                            <Field id={"username"} />
                            <ErrorMessage component={"p"} id="username" name="username" />
                        </div>
                        <div>
                            <Field id={"email"} />
                            <ErrorMessage component={"p"} id="email" name="email" />
                        </div>
                        <div>
                            <Field id={"password"} />
                            <ErrorMessage component={"p"} id="password" name="password" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
