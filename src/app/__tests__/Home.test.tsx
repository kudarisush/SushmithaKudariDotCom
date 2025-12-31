import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../page'
import {Provider} from "@/components/ui/provider";

describe('Home Page', () => {
  it('should render the main heading', () => {
    render(
      <Provider>
        <App />
      </Provider>
    )
    screen.getByText(/Welcome to Your New Site/i)
  })
})