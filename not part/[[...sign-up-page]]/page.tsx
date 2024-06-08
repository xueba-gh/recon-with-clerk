import { SignUp } from "@clerk/nextjs";

const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Take up the full height of the viewport
    },
  };


export default function Page() {
  return (
    <div style={styles.container}>
      <SignUp />
    </div>
  );
}