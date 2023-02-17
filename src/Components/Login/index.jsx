import { useContext, useState } from "react";
import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { If, Then, Else } from "react-if";
import { AuthContext } from "../../Context/Auth";
import { IconEyeCheck, IconEyeOff } from '@tabler/icons';

const Login = () => {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    logout();
  };

  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Button color='red' onClick={handleLogout}>
            Log Out
          </Button>
        </Then>
        <Else>
          <Group>
            <TextInput
              label="Your Username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
            />
            {/* <PasswordInput
              placeholder='Password'
              /> */}
            <PasswordInput
              onChange={(e) => setPassword(e.target.value)}
              label="Your Password:"
              placeholder={password}
              visibilityToggleIcon={({ reveal, size }) =>
              reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
      }
            />

            <Button color='gray.8' onClick={() => login(username, password)}>
              Login
            </Button>
          </Group>
        </Else>
      </If>
    </>
  );
};

export default Login;
