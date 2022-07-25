import { COMMENTS } from ".../shared/COMMENTS";
import { isCompositeComponent } from "react-dom/test-utils";
export const selectCommentByCampsiteId = (campsiteid) => {
  return COMMENTS.filter((comment) => {
    return comment.campsiteId == campsiteid;
  });
};
