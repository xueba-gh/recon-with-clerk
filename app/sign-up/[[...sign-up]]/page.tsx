// app/sign-up/page.tsx

import { SignUp } from "@clerk/nextjs";

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

export default function SignUpPage() {
  return (
    <div style={styles.container}>
      <SignUp />
    </div>
  );
}
