export const validEmail = new RegExp(
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
 );
//  validate password 0-9 .!@#$%^&* และตัวอักษร A-Z 
 export const validPassword = new RegExp(/^(?=.*[0-9])(?=.*[.!@#$%^&*])[A-z0-9!@#$%^&*]/);
export const validusername = new RegExp(/^(?=.{4,20}$)[A-Za-z_][A-Za-z0-9_]*$/);

