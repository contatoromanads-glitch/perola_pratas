import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useEffect } from 'react'

export default function Termos() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-20 px-5 md:px-8 bg-surface-0 text-secondary">
        <div className="max-w-[800px] mx-auto prose prose-invert prose-emerald">
          <h1 className="font-serif text-4xl text-primary mb-8">Termos de Uso</h1>
          
          <p className="mb-6">Bem-vindo(a) à Pérola Pratas. Ao acessar e utilizar nosso site, você concorda com os presentes Termos de Uso. Recomendamos a leitura atenta antes de realizar qualquer compra.</p>
          
          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">1. Condições Gerais</h2>
          <p className="mb-4">A Pérola Pratas atua como fornecedora de joias em Prata 925, tanto para o atacado quanto para o varejo. Garantimos a autenticidade do material (Prata de Lei 925) em todas as nossas peças comercializadas.</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">2. Garantia</h2>
          <p className="mb-4">Todas as nossas joias acompanham garantia vitalícia sobre a cor do metal (Prata 925). A garantia não cobre quebras, perda de pedras, arranhões, oxidação natural do metal ou danos causados por mau uso, como contato com produtos químicos, perfumes e cosméticos.</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">3. Compras no Atacado e Revenda</h2>
          <p className="mb-4">Operamos exclusivamente em regime de atacado, com pedido mínimo de R$ 899 por compra. Ao adquirir nossos produtos, o revendedor assume a responsabilidade pelas suas próprias vendas e margens de lucro, utilizando o material de apoio fornecido pela Pérola Pratas estritamente para divulgação das peças adquiridas.</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">4. Trocas e Devoluções</h2>
          <p className="mb-4">Em respeito ao Código de Defesa do Consumidor, aceitamos devoluções por arrependimento em até 7 (sete) dias corridos após o recebimento do pedido, desde que a peça não tenha sinais de uso. Em caso de defeito de fabricação, o prazo para comunicação é de até 30 dias corridos.</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">5. Preços e Prazos</h2>
          <p className="mb-4">Os preços podem sofrer alterações sem aviso prévio. O prazo de entrega varia conforme a região e a modalidade de envio escolhida (Correios ou transportadora) no momento da compra. Os envios são realizados em até 48 horas úteis após a confirmação do pagamento.</p>

          <h2 className="font-serif text-2xl text-primary mt-10 mb-4">6. Propriedade Intelectual</h2>
          <p className="mb-4">Todo o conteúdo deste site, incluindo logotipos, textos, imagens e vídeos, é de propriedade exclusiva da Pérola Pratas. O uso de nossas imagens é permitido apenas para clientes ativos que estejam revendendo nossos produtos.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
