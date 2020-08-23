import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import { BASIC_COLOR } from 'styles/_colors'

export const StyledDialog = styled(Dialog)`
  && {
    .paper-dialog {
      width: 100%;
      max-width: 400px;
    }
  }
`

export const StyledDialogTitle = styled(DialogTitle)`
  && {
    h2 {
      text-align: center;
      font-size: 2.4rem;
      font-weight: bold;

      .ic-close {
        position: absolute;
        right: 12px;
        top: 12px;
        color: gray;
        cursor: pointer;
      }
    }
  }
`

export const StyledDialogContent = styled(DialogContent)`
  && {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 24px;
    padding: 30px 50px;
    font-size: 1.4rem;
  }
`

export const StyledDialogActions = styled(DialogActions)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 50px 34px;
  }
`

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .btn-loading {
    position: absolute;
    color: ${BASIC_COLOR.mainPurple};
  }
`
