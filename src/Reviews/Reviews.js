import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Review from './Review/Review'
import AddReviewForm from './AddReviewForm/AddReviewForm'

const Reviews = () => {
  const reviews = useSelector(state => state.reviews)

  return (
    < Row >
      <Col xs={12}>
        <AddReviewForm />
      </Col>
      <Col xs={12}>
        {
          reviews.map((review, idx) => <Review name={review.peopleName} text={review.text} stars={review.starsCount} key={idx} />)
        }
      </Col >
    </Row >
  )
}

export default Reviews