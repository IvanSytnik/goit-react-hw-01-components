import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'

import user  from './JSON/user.json'
import data from './JSON/data.json';
import friends from './JSON/friends.json'
import transactions from './JSON/transactions.json';



export const App = () => {
  return (
    <div>
      <Profile avatar ={user.avatar} username={user.username} tag={user.tag} location={user.location} stats={user.stats}/>
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
    </div>
  );
};
