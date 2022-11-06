import { IconBrandGithub } from '@tabler/icons';
import Button from './components/Button';
import Cards from './components/Cards';
import Label from './components/Label';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  function submit(e) {
    e.preventDefault();
  }

  function onChange(e) {

  }
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center mt-6">
        <Cards>
          <Cards.Header>Sign up</Cards.Header>
          <Cards.Body>
            <form onSubmit={submit}>
              <div className="mb-3">
                <Label htmlFor="name" value={'Name'} />
                <Input
                  name={'name'}
                  id={'name'}
                  placeholder="input your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="email" value={'Email'} />
                <Input
                  name={'email'}
                  id={'email'}
                  placeholder="input your correct email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </form>
          </Cards.Body>
          <Cards.Footer>
            <Button className="bg-black">
              <IconBrandGithub /> Register
            </Button>
          </Cards.Footer>
        </Cards>
      </div>
    </div>
  );
}

export default App;
