import { Text, createStyles, Navbar } from '@mantine/core'
import { Link } from 'react-router-dom';


const useStyles = createStyles((theme)=> ({
  header: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontsize: theme.fontsize.md,
    color: theme.colors.gray[0],
  }
}));

const Header = () => {


  return (
    <>
    <div>
      <header>
        <Text>Home</Text>
      </header>
      <ul>
        {}
      </ul>
      </div>
    </>
  )
};

export default Header;