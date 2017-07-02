import React from 'react';
import BookmarksGrid from "./BookmarksGrid";
import NewBookmarkModal from "./modals/NewBookmarkModal";
import DeleteBookmarkModal from "./modals/DeleteBookmarkModal";
import EditBookmarkModal from "./modals/EditBookmarkModal";
const Modals  = (props) => {
    return (
        <div className="modals">
            <NewBookmarkModal/>
            <DeleteBookmarkModal/>
            <EditBookmarkModal/>
        </div>

    )
};

export default Modals;