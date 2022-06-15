import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App component', () => {
  it('App renders', () => {
    render(<App />)
    expect(screen.getByText(/todo for mindbox/i)).toBeInTheDocument()
  })
  it('typing note works', () => {
    render(<App />)
    expect(screen.queryByDisplayValue(/whattodo/i)).toBeNull()
    userEvent.type(screen.getByRole('textbox'), 'whattodo')
    expect(screen.queryByDisplayValue(/whattodo/i)).toBeInTheDocument()
  })
  it('adding note works', () => {
    render(<App />)
    userEvent.type(screen.getByRole('textbox'), 'whattodo')
    userEvent.click(screen.getByText('ADD'))
    expect(screen.queryByDisplayValue('whattodo')).toBeNull()
    expect(screen.queryByText(/whattodo/i)).toBeInTheDocument()
  })
  it('filter is working', () => {
    render(<App />)
    expect(screen.getByText(/Сделать ToDo/i)).toBeInTheDocument()
    userEvent.click(screen.getByText('Active'))
    expect(screen.queryByText(/Сделать ToDo/i)).toBeNull()
    expect(screen.getByText(/Отправить резюме/i)).toBeInTheDocument()
  })
  it('Dynamic styles works', () => {
    render(<App />)
    userEvent.click(screen.getByText('Active'))
    expect(screen.getByRole('button', { name: /active/i })).toHaveClass(
      'navbar__filter-btn_active'
    )
  })
  it('delete note works', () => {
    render(<App />)
    expect(screen.getByText(/Сделать ToDo/i)).toBeInTheDocument()
    const findedCard = within(screen.getByText(/Сделать ToDo/i).parentElement)
    userEvent.click(findedCard.getByRole('button', { name: 'X' }))
    expect(screen.queryByText(/Сделать ToDo/i)).toBeNull()
  })
})
