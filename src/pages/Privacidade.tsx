import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useEffect } from 'react'

export default function Privacidade() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-20 px-5 md:px-8 bg-surface-0 text-secondary">
        <div className="max-w-[800px] mx-auto prose prose-invert prose-emerald">
          <h1 className="font-serif text-4xl text-primary mb-8">Política de Privacidade</h1>
          
          <p className="mb-6">A Pérola Pratas está comprometida com a proteção dos seus dados pessoais e com a sua privacidade, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">1. Coleta de Dados</h2>
          <p className="mb-4">Coletamos informações pessoais que você nos fornece voluntariamente ao realizar uma compra, se cadastrar em nossa newsletter ou entrar em contato via WhatsApp. Isso inclui: nome, CPF/CNPJ, e-mail, telefone, endereço de entrega e dados de pagamento.</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">2. Uso das Informações</h2>
          <p className="mb-4">Seus dados são utilizados exclusivamente para as seguintes finalidades:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Processamento de pedidos e gestão de envios;</li>
            <li>Comunicação sobre o status de suas compras;</li>
            <li>Envio de materiais promocionais e novidades para revendedoras (caso autorizado);</li>
            <li>Cumprimento de obrigações legais e fiscais.</li>
          </ul>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">3. Compartilhamento de Dados</h2>
          <p className="mb-4">Nós não vendemos ou comercializamos seus dados pessoais. Eles poderão ser compartilhados apenas com parceiros essenciais para a operação (ex: gateways de pagamento e empresas de logística/correios) estritamente para a finalização e entrega do seu pedido.</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">4. Segurança</h2>
          <p className="mb-4">Adotamos medidas de segurança técnicas e administrativas para proteger seus dados contra acessos não autorizados, perdas ou alterações. O processamento de pagamentos é feito em ambientes seguros e criptografados operados por nossos parceiros financeiros.</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">5. Seus Direitos</h2>
          <p className="mb-4">Você tem o direito de solicitar o acesso, a correção ou a exclusão dos seus dados pessoais armazenados em nossa base. Para exercer esses direitos, entre em contato conosco através do nosso WhatsApp oficial ou e-mail de atendimento.</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">6. Cookies</h2>
          <p className="mb-4">Utilizamos cookies para melhorar a sua experiência em nosso site e para fins de publicidade (como Google Ads e Facebook Ads), permitindo oferecer campanhas relevantes para o seu perfil. Você pode gerenciar as preferências de cookies nas configurações do seu navegador.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
