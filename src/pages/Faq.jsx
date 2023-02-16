import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'

import { useAppContext } from '../components/App/AppContext/AppContext'
import { selectAllFaq, selectFaqStatus, fetchFaqs } from '../store/faqsSlice'
import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { capitalizeFirstLetter } from '../services/helpers'

export const Faq = () => {
  const { colors } = useAppContext()
  const dispatch = useDispatch()
  const faqs = useSelector(selectAllFaq)
  const faqStatus = useSelector(selectFaqStatus)

  useEffect(() => {
    let delay

    if (faqStatus === 'idle') {
      delay = setTimeout(() => {
        dispatch(fetchFaqs())
      }, 1500)
    }

    return () => clearTimeout(delay)
  }, [faqStatus, dispatch])

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions page:' />
      <Loading isLoading={faqStatus !== 'succeeded'}>
        {faqs.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
              <Typography variant='h5' color={colors.greenAccent[700]}>
                {capitalizeFirstLetter(faq.title)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{capitalizeFirstLetter(faq.body)}</AccordionDetails>
          </Accordion>
        ))}
      </Loading>
    </Box>
  )
}
