import { ErrorMessage } from '@hookform/error-message';
import { FC, memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';

interface LoginFormType {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback((data: LoginFormType) => {
    console.log(data);
  }, []);

  const styleRoot = 'Login container md:3/5 lg:w-3/6 xl:w-2/5 ';
  const styleHeader = 'h-20 flex justify-center items-center text-3xl';
  const styleMain = 'border border-emerald-400 p-5 rounded-md';
  const styleRow = 'p-5 flex flow-root';
  const styleBtn =
    'p-2 w-full rounded-lg bg-emerald-400 hover:opacity-80 ' +
    'text-teal-50 text-lg hover:border-emerald-500 hover:ring-2 font-black';
  const styleInputLabel = 'block pb-1 text-lg text-emerald-700';
  const styleInput = 'border rounded-md border-emerald-500 w-full p-2 text-lg text-emerald-900';

  return (
    <div className={styleRoot}>
      <header className={styleHeader}>
        <h1 className="text-center">ログイン画面</h1>
      </header>
      <main className={styleMain}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styleRow}>
            <label htmlFor="email" className={styleInputLabel}>
              メールアドレス
              <input
                id="email"
                type="email"
                className={styleInput}
                {...register('email', {
                  required: 'メールアドレスを入力してください。',
                })}
              />
              <ErrorMessage errors={errors} name="email" />
            </label>
          </div>
          <div className={styleRow}>
            <label htmlFor="password" className={styleInputLabel}>
              パスワード
              <input
                id="password"
                type="password"
                className={styleInput}
                {...register('password', {
                  required: 'パスワードを入力してください。',
                })}
              />
              <ErrorMessage errors={errors} name="password" />
            </label>
          </div>
          <div className={styleRow}>
            <button type="submit" className={styleBtn}>
              ログイン
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default memo(LoginPage);
