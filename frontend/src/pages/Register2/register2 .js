import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import classes from './registerPage.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { EMAIL } from '../../constants/patterns';
import CopyRight from '../../components/CopyRight/CopyRight';

export default function RegisterPage() {
  const auth = useAuth();
  const { user } = auth;
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  useEffect(() => {
    if (!user) return;
    returnUrl ? navigate(returnUrl) : navigate('/');
  }, [user]);

  const [userType, setUserType] = useState("individual");
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const submit = async data => {
    await auth.register(data);
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Register" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <label>
            User Type:
            <select value={userType} onChange={handleUserTypeChange}>
              <option value="individual">Individual</option>
              <option value="departmental">Departmental</option>
            </select>
          </label>
          {userType === "individual" ? (
            <div>
              <Input
                type="text"
                label="Name"
                {...register('name', {
                  required: true,
                  minLength: 5,
                })}
                error={errors.name}
              />

              <Input
                type="email"
                label="Email"
                {...register('email', {
                  required: true,
                  pattern: EMAIL,
                })}
                error={errors.email}
              />

              <Input
                type="password"
                label="Password"
                {...register('password', {
                  required: true,
                  minLength: 5,
                })}
                error={errors.password}
              />

              <Input
                type="password"
                label="Confirm Password"
                {...register('confirmPassword', {
                  required: true,
                  validate: value =>
                    value !== getValues('password')
                      ? 'Passwords Do No Match'
                      : true,
                })}
                error={errors.confirmPassword}
              />
            </div>
          ) : (
            <div>
              <Input
                type="text"
                label="Department Name"
                {...register('department_name', {
                  required: true,
                  minLength: 5,
                })}
                error={errors.department_name}
              />

              <Input
                type="text"
                label="Department Head"
                {...register('department_head', {
                  required: true,
                  minLength: 5,
                })}
                error={errors.department_head}
              />

              <Input
                type="email"
                label="Email"
                {...register('email', {
                  required: true,
                  pattern: EMAIL,
                })}
                error={errors.email}
              />

              <Input
                type="password"
                label="Password"
                {...register('password', {
                  required: true,
                  minLength: 5,
                })}
                error={errors.password}
              />

              <Input
                type="password"
                label="Confirm Password"
                {...register('confirmPassword', {
                  required: true,
                  validate: value =>
                    value !== getValues('password')
                      ? 'Passwords Do No Match'
                      : true,
                })}
                error={errors.confirmPassword}
              />
            </div>
          )}
          <Button type="submit" text="Register" />

          <div className={classes.login}>
            Already a user? &nbsp;
            <Link to={`/login${returnUrl ? '?returnUrl=' + returnUrl : ''}`}>
              Login here
            </Link>
          </div>
        </form>
      </div>

      <CopyRight />
    </div>
  );
}