import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

           <ApprovalCard>
                <CommentDetail 
                    pic={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    timeAgo='Today 5:28PM' 
                    comt ='This is Awesome!'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    pic={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    timeAgo='Today 4:28AM' 
                    comt ='Wow! Amazing!'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    pic={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    timeAgo='Yesterday 7:28PM' 
                    comt ='I have never seen this before.'
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));