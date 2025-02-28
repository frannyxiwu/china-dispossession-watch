import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LearnMore = ({resource}) => {

  return (
    <LearnMoreWrapper>
        <LearnMoreArticle>
            <a href={resource.link}>{resource?.title}</a>
            <a href={resource.link}>{resource?.chTitle}</a>
            <span>{resource?.author}</span>
            <span>{resource?.chAuthor}</span>
            <span>{resource?.date}</span>
            <span>{resource?.chDate}</span>
            {/* <span>If the submitter has some additional comments, they will go here.</span> */}
        </LearnMoreArticle>
    </LearnMoreWrapper>
  )
}

export default LearnMore;

const LearnMoreArticle = styled.div`
    padding: 8px 16px;
    margin-bottom: 16px;
    width: 100%;
    border: 1px solid #423F67;
    border-radius: 3px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    span {
        font-weight: 700;
        font-size: 14px;
        line-height: 26px;
        text-decoration: none;
    }
`

const LearnMoreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;

    color: #423F67;
    a {
        font-style: none;
        color: inherit;
    }
`