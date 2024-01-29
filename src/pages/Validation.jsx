export default function Validation(values) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const points_pattern = /^\d*$/;

    if(values.name === "" ) {
        errors.name = "Name is Required!";
    }

    if(values.email === "") {
        errors.email = "Email is Required";
    }
    else if (!email_pattern.test(values.email)) {
        errors.email = "Email didn't match";
    } 

    if(values.points === "") {
        errors.points = "Points Required";
    }else if (!points_pattern.test(values.points)) {
        errors.points = "Points didn't match";
    }

    return errors;
}