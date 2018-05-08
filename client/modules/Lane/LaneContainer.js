import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';
import { connect } from 'react-redux';
import Lane from './Lane';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import { deleteLane, updateLane, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapDispatchToProps = {
  editLane,
  deleteLane,
  updateLane,
  addNote: createNoteRequest,
};

const mapDispatchToProps = {
  ...laneActions,
  addNote: createNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);