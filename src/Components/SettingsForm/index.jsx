import { IconSettings } from '@tabler/icons';
import { createStyles, Switch, Grid, Card, Text, NumberInput, TextInput, Button } from '@mantine/core';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.spacing.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,

  }
}));


const SettingsForm = () => {
  const [show, setShow] = useState(false);

  const { showComplete,
    setShowComplete,
    pageItems,
    setPageItems,
    sort,
    setSort,
    saveLocally,
  } = useContext(SettingsContext);

  const { classes } = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveLocally();
  }
  return (
    <>
      <h1 className={classes.h1}><IconSettings />Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={6}>
          <Card withBorder p='sm'>
            <Card.Section>
              <Text>Updated Settings</Text>
              <form onSubmit={handleSubmit}>
                <Switch
                label='Show Completed ToDos' 
                checked={showComplete} 
                onChange={(event) => setShowComplete(event.currentTarget.checked)}
                />
                <NumberInput 
                md='sm'
                value={pageItems}
                label='your age'
                onChange={(value)=> setPageItems(value)}
                />
                <TextInput 
                mb='sm'
                placeholder={sort}
                onChange={(e)=> setSort(e.target.value)}
                label='Sort KeyWord'
                />
                <Button type='submit'>Show New Settings</Button>
              </form>
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>

        </Grid.Col>
      </Grid>

    </>
  )
};

export default SettingsForm;






























// export const SettingsContext = React.createContext();

// const SettingsProvider = ({ children }) => {
//   const [name, setName] = useState('Anyone');
//   const [setSort] = useState(3);
//   const [setPageItems] = useState(3);
//   const [showCompleted] = useState(false);

//   const values = {
//     name,
//     setSort,
//     setPageItems,
//     showCompleted,
//   };

//   return (
//     <SettingsContext.Provider value={values}>
//       {children}
//     </SettingsContext.Provider>
//   );
// };

// export default SettingsProvider;
