import { Text, createStyles } from '@mantine/core'

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
      <header>
        <Text>Home</Text>
      </header>
    </>
  )
};

export default Header;