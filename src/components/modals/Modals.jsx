import React from 'react';
import BookmarksGrid from "../BookmarksGrid";
import NewBookmarkModal from "./NewBookmarkModal";
import DeleteBookmarkModal from "./DeleteBookmarkModal";
import EditBookmarkModal from "./EditBookmarkModal";
const Modals  = (props) => {
    return (
        <div className="modals">
            <BookmarksGrid/>
            <NewBookmarkModal/>
            <DeleteBookmarkModal/>
            <EditBookmarkModal/>
        </div>

    )
};

export default Modals;