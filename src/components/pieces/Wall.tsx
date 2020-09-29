import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  base: {
    height: 21,
    width: 21,
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Piece: React.FC = () => {
  
  const styles = useStyles({});
  
  return (
    <div className={styles.base} />
  );
};

export default Piece;