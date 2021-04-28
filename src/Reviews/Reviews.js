import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Review from './Review/Review'
import AddReviewForm from './AddReviewForm/AddReviewForm'
import database from '../firebase/firebase'
import { fetchAllReviews } from '../actions/actions'

const Reviews = () => {
  const reviews = useSelector(state => state.reviews)
  const dispatch = useDispatch()

  useEffect(() => {
    database.ref('reviews').once('value')
      .then((snapshot) => {
        const temp = []
        snapshot.forEach((snap) => {
          temp.push(snap.val())
        })
        dispatch(fetchAllReviews(temp))
      })
  }, [dispatch])

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