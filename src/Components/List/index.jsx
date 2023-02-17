import { Badge, Card, Pagination, Text } from "@mantine/core";
import { useContext, useState } from "react";
import { If, Then, Else } from "react-if";
import { AuthContext } from "../../Context/Auth";
import { SettingsContext } from "../../Context/Settings";

const List = ({ list, toggleComplete }) => {
  const { can, isLoggedIn } = useContext(AuthContext);
  const { showCompleted, pageItems } = useContext(SettingsContext);
  const [page, setPage] = useState(1);

  // pagination logic
  const listToRender = showCompleted
    ? list
    : list.filter((item) => !item.complete);
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd);

  return (
    <>
      {displayList.map((item) => (
        <Card key={item.id} withBorder shadow='md'>
          <Card.Section withBorder>
            <If condition={isLoggedIn && can("update")}>
              <Then>
                <Badge 
                color={item.complete ? "red" : "green"} 
                variant='filled'
                onClick={() => toggleComplete(item.id)}
                >
                  {item.complete ? "Complete" : "Pending"}
                </Badge>
              </Then>
              <Else>
                <Badge 
                color={item.complete ? "red" : "green"} 
                variant='filled'>
                  {item.complete ? "Complete" : "Pending"}
                </Badge>
              </Else>
            </If>

            <Text>{item.assignee}</Text>
          </Card.Section>

          <p>{item.id}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div >
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </Card>
      ))}

      <Pagination page={page} onChange={setPage} total={pageCount} />
    </>
  );
};

export default List;
