import { observer } from 'mobx-react-lite';
import { store } from '../../store/store';
import SearchPane from '../SearchPane/SearchPane';
import NowPlayingPane from '../NowPlayingPane/NowPlayingPane';
import styles from './RightPane.module.css';

const RightPane = observer(() => {
  const Page = store.navigator.component;
  return (
    <div className={styles.rightPane}>
      <SearchPane />
      <Page />
      {!!store.nowPlaying.path && <NowPlayingPane />}
    </div>
  );
});

export default RightPane;
