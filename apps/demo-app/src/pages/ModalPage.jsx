import React, { useState } from 'react';
import { 
  AxModal,
  AxModalContent,
  AxModalHeader,
  AxModalTitle,
  AxModalDescription,
  AxModalBody,
  AxModalFooter,
  AxButton,
  AxInput,
  AxLabel
} from '@my-org/react-component-library';

const AxModalPage = () => {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [fullscreenModalOpen, setFullscreenModalOpen] = useState(false);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);
  const [currentSize, setCurrentSize] = useState('default');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setFormModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">AxModal Component</h1>
          <p className="text-muted-foreground">A flexible modal component with multiple sizes, variants, and interaction patterns.</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Basic Modal</h2>
            <p className="text-muted-foreground mb-6">Simple modal with header, body, and footer.</p>
            <div className="space-x-4">
              <AxButton onClick={() => setBasicModalOpen(true)}>
                Open Basic Modal
              </AxButton>
            </div>

            <AxModal open={basicModalOpen} onOpenChange={setBasicModalOpen}>
              <AxModalContent>
                <AxModalHeader>
                  <AxModalTitle>Basic Modal</AxModalTitle>
                  <AxModalDescription>
                    This is a basic modal with header, body, and footer.
                  </AxModalDescription>
                </AxModalHeader>
                <AxModalBody>
                  <p>This is the modal content. You can put any content here.</p>
                </AxModalBody>
                <AxModalFooter>
                  <AxButton variant="outline" onClick={() => setBasicModalOpen(false)}>
                    Cancel
                  </AxButton>
                  <AxButton onClick={() => setBasicModalOpen(false)}>
                    Confirm
                  </AxButton>
                </AxModalFooter>
              </AxModalContent>
            </AxModal>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Confirmation Modal</h2>
            <p className="text-muted-foreground mb-6">Modal for confirming destructive actions.</p>
            <div className="space-x-4">
              <AxButton variant="destructive" onClick={() => setConfirmModalOpen(true)}>
                Delete Item
              </AxButton>
            </div>

            <AxModal open={confirmModalOpen} onOpenChange={setConfirmModalOpen}>
              <AxModalContent>
                <AxModalHeader>
                  <AxModalTitle>Confirm Deletion</AxModalTitle>
                  <AxModalDescription>
                    Are you sure you want to delete this item? This action cannot be undone.
                  </AxModalDescription>
                </AxModalHeader>
                <AxModalBody>
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="text-destructive font-medium">Warning: This action is permanent!</p>
                  </div>
                </AxModalBody>
                <AxModalFooter>
                  <AxButton variant="outline" onClick={() => setConfirmModalOpen(false)}>
                    Cancel
                  </AxButton>
                  <AxButton variant="destructive" onClick={() => setConfirmModalOpen(false)}>
                    Delete
                  </AxButton>
                </AxModalFooter>
              </AxModalContent>
            </AxModal>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Form Modal</h2>
            <p className="text-muted-foreground mb-6">Modal containing a form for data input.</p>
            <div className="space-x-4">
              <AxButton onClick={() => setFormModalOpen(true)}>
                Open Form Modal
              </AxButton>
            </div>

            <AxModal open={formModalOpen} onOpenChange={setFormModalOpen}>
              <AxModalContent size="lg">
                <AxModalHeader>
                  <AxModalTitle>Contact Form</AxModalTitle>
                  <AxModalDescription>
                    Fill out the form below and we'll get back to you.
                  </AxModalDescription>
                </AxModalHeader>
                <AxModalBody>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <AxLabel htmlFor="modal-name">Name</AxLabel>
                      <AxInput
                        id="modal-name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <AxLabel htmlFor="modal-email">Email</AxLabel>
                      <AxInput
                        id="modal-email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <AxLabel htmlFor="modal-message">Message</AxLabel>
                      <textarea
                        id="modal-message"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Enter your message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange('message')}
                        required
                      />
                    </div>
                  </form>
                </AxModalBody>
                <AxModalFooter>
                  <AxButton variant="outline" onClick={() => setFormModalOpen(false)}>
                    Cancel
                  </AxButton>
                  <AxButton onClick={handleFormSubmit}>
                    Send Message
                  </AxButton>
                </AxModalFooter>
              </AxModalContent>
            </AxModal>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Modal Sizes</h2>
            <p className="text-muted-foreground mb-6">Different sizes for different content types.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AxButton onClick={() => { setCurrentSize('sm'); setSizeModalOpen(true); }}>
                Small Modal
              </AxButton>
              <AxButton onClick={() => { setCurrentSize('default'); setSizeModalOpen(true); }}>
                Default Modal
              </AxButton>
              <AxButton onClick={() => { setCurrentSize('lg'); setSizeModalOpen(true); }}>
                Large Modal
              </AxButton>
              <AxButton onClick={() => { setCurrentSize('xl'); setSizeModalOpen(true); }}>
                Extra Large Modal
              </AxButton>
            </div>

            <AxModal open={sizeModalOpen} onOpenChange={setSizeModalOpen}>
              <AxModalContent size={currentSize}>
                <AxModalHeader>
                  <AxModalTitle>{currentSize.charAt(0).toUpperCase() + currentSize.slice(1)} Modal</AxModalTitle>
                  <AxModalDescription>
                    This is a {currentSize} sized modal.
                  </AxModalDescription>
                </AxModalHeader>
                <AxModalBody>
                  <p>Modal size: <strong>{currentSize}</strong></p>
                  <p>This modal demonstrates different content widths based on the size variant.</p>
                </AxModalBody>
                <AxModalFooter>
                  <AxButton variant="outline" onClick={() => setSizeModalOpen(false)}>
                    Close
                  </AxButton>
                </AxModalFooter>
              </AxModalContent>
            </AxModal>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Fullscreen Modal</h2>
            <p className="text-muted-foreground mb-6">Modal that takes up the entire screen.</p>
            <div className="space-x-4">
              <AxButton onClick={() => setFullscreenModalOpen(true)}>
                Open Fullscreen Modal
              </AxButton>
            </div>

            <AxModal open={fullscreenModalOpen} onOpenChange={setFullscreenModalOpen}>
              <AxModalContent size="fullscreen">
                <AxModalHeader>
                  <AxModalTitle size="lg">Fullscreen Modal</AxModalTitle>
                  <AxModalDescription size="lg">
                    This modal takes up the entire screen space.
                  </AxModalDescription>
                </AxModalHeader>
                <AxModalBody>
                  <div className="space-y-4">
                    <p>This is a fullscreen modal that occupies the entire viewport.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Array.from({ length: 6 }, (_, i) => (
                        <div key={i} className="bg-card border rounded-lg p-4">
                          <h3 className="font-semibold mb-2">Card {i + 1}</h3>
                          <p className="text-sm text-muted-foreground">
                            This is sample content for the fullscreen modal.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AxModalBody>
                <AxModalFooter>
                  <AxButton variant="outline" onClick={() => setFullscreenModalOpen(false)}>
                    Close Fullscreen
                  </AxButton>
                </AxModalFooter>
              </AxModalContent>
            </AxModal>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Props</h2>
            <div className="bg-card border rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">AxModal Props</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-medium">Prop</th>
                        <th className="text-left p-2 font-medium">Type</th>
                        <th className="text-left p-2 font-medium">Default</th>
                        <th className="text-left p-2 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="p-2 font-mono">open</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">Whether the modal is open</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">onOpenChange</td>
                        <td className="p-2">(open: boolean) =&gt; void</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Callback when modal state changes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">size</td>
                        <td className="p-2">'sm' | 'default' | 'lg' | 'xl' | 'fullscreen'</td>
                        <td className="p-2">'default'</td>
                        <td className="p-2">Size of the modal</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">overlayVariant</td>
                        <td className="p-2">'default' | 'light' | 'dark' | 'none'</td>
                        <td className="p-2">'default'</td>
                        <td className="p-2">Overlay background variant</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Subcomponent Props</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p><strong className="text-foreground">AxModalContent:</strong> size, variant ('default' | 'outline' | 'ghost')</p>
                    <p><strong className="text-foreground">AxModalTitle:</strong> size ('sm' | 'default' | 'lg')</p>
                    <p><strong className="text-foreground">AxModalDescription:</strong> size ('xs' | 'sm' | 'default' | 'lg')</p>
                    <p><strong className="text-foreground">AxModalHeader/Body/Footer:</strong> padding ('none' | 'sm' | 'default' | 'lg')</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AxModalPage;
