/* global chrome */
import React from 'react';
import {connect} from 'react-redux';
import Bookmark from './Bookmark.jsx';
import {openNewBookmarkModal} from '../store/actions/modalsActions';
import {bindActionCreators} from 'redux';
import ColorExtractor from './helpers/colorExtractor';
import './styles/BookmarksGrid.css';
class BookmarksGrid extends React.Component {
    constructor() {
        super();
        this.extensionFolderName = 'extensionFolder';
        this.state = {
            extensionFolder: {}
        };
    }

    componentWillMount() {
        // chrome.storage.local.get('hasBookmarksChanged');
            this.fetchExtensionFolder(this.extensionFolderName);
    }

    fetchExtensionFolder = (name) => {
        chrome.storage.local.get(name, (extensionFolder) => {
            this.fetchBookmarksFromFolder(extensionFolder);
        })
    };

    fetchBookmarksFromFolder = (extensionFolder) => {
        console.log(extensionFolder);
        chrome.bookmarks.getChildren(extensionFolder.extensionFolder.id, (bookmarks) => {
            let coloredBookmarks = bookmarks.map((bookmark) => {
                return {
                    ...bookmark,
                    color: ColorExtractor.extractColor(bookmark.url),
                    url: ColorExtractor.extractUrl(bookmark.url)
                }
            });
            this.props.updateFetchedBookmarks(coloredBookmarks);

            this.setState({
                extensionFolder: extensionFolder.extensionFolder
            });

            this.props.setExtensionFolder(extensionFolder.extensionFolder);
        })
    };

    render() {
        return (
            <div className="bookmark__grid">
                {this.props.bookmarks.map((singleBookmark, key) => {
                    return <Bookmark key={key} 
                    title={singleBookmark.title} 
                    id={singleBookmark.id} 
                    color={singleBookmark.color}
                    url={singleBookmark.url}/>
                })}
                <button onClick={this.props.openNewBookmarkModal.bind(this)} className="button is-info bookmark__new"> + </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookmarks: state.bookmarksReducer.bookmarks
    }
};

const mapDispatchToProps = (dispatch) => {
        return {
            openNewBookmarkModal: () => {
                dispatch({
                    type: 'OPEN_NEW_BOOKMARK_MODAL'
                });
                dispatch({
                    type: 'SET_EDITED_BOOKMARK',
                    title: '',
                    url: ''
                })
                },

            updateFetchedBookmarks: (fetchedBookmarks) => dispatch({
                type: 'SET_FETCHED_BOOKMARKS',
                fetchedBookmarks
            }),
            
            

            setExtensionFolder: (extensionFolder) => {
                dispatch({
                    type: 'SET_EXTENSION_FOLDER',
                    extensionFolder
                })
            }
        }

};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksGrid);