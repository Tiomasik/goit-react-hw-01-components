
import { UserProfile } from 'components/Profille/UserProfile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendListItem } from 'components/FriendListItem/BorderFriends/BorderFriends';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';


export const App = () => {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
      
      <Statistics stats={data} />
      
      <FriendListItem friends={friends} />
      
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};


