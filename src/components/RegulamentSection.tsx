import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function RegulamentSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <Card className="shadow-divine">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Regulamento Oficial
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Sorteio Expo Cristã 2025
            </p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">
                  1. EMPRESA PROMOTORA
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>1.1 A promoção é de responsabilidade da Viva America, com sede em Av. Ipanema, 165, bairro Dezoito do forte Empresarial/Alphaville - São Paulo-SP, inscrita no CNPJ sob o nº 48.813.416/0001-55.</p>
                  <p>1.2 A organização, administração e entrega do prêmio ficam a cargo da promotora.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">
                  2. MODALIDADE DA PROMOÇÃO
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>2.1 A promoção se dará na modalidade "Assemelhada a Sorteio", obedecendo à regulamentação vigente da Secretaria de Prêmios e Apostas (SPA/MF).</p>
                  <p>2.2 A participação está vinculada à autorização oficial do Ministério da Fazenda, cujo número será divulgado nos materiais de comunicação.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">
                  3. PERÍODO DA PROMOÇÃO
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>3.1 As inscrições estarão abertas entre 11/09/2025 e 16/09/2025, exclusivamente no stand da Viva America, localizado no evento Expo Cristã, no Anhembi, São Paulo/SP.</p>
                  <p>3.2 O sorteio será realizado no dia 16/09/2025, no palco principal da Expo Cristã, a partir das [horário a confirmar].</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">
                  4. ÁREA DE ABRANGÊNCIA
                </AccordionTrigger>
                <AccordionContent>
                  <p>4.1 Podem participar pessoas físicas, maiores de 18 anos, residentes no Brasil, presentes no evento Expo Cristã.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-semibold">
                  5. DADOS NECESSÁRIOS PARA INSCRIÇÃO
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>5.1 Para participar, o interessado deverá fornecer obrigatoriamente os seguintes dados:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Nome completo</li>
                    <li>CPF</li>
                    <li>E-mail</li>
                    <li>Telefone</li>
                  </ul>
                  <p>5.2 Esses dados serão utilizados exclusivamente para fins de identificação do participante e contato em caso de contemplação.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-semibold">
                  6. TRATAMENTO DE DADOS (LGPD)
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>6.1 Os dados pessoais coletados serão tratados conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>
                  <p>6.2 A Viva America se compromete a:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Utilizar as informações apenas para fins relacionados ao sorteio;</li>
                    <li>Não compartilhar, vender ou disponibilizar dados a terceiros;</li>
                    <li>Adotar medidas de segurança técnicas e organizacionais para a proteção dos dados;</li>
                    <li>Disponibilizar o canal academy@vivaamerica.com para solicitações relacionadas aos direitos do titular de dados.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-semibold">
                  7. PRÊMIO
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>7.1 O ganhador receberá:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Uma passagem aérea de ida e volta para Disney (classe econômica)</li>
                    <li>5 dias de hospedagem</li>
                    <li>Ingresso para 1 parque da Disney</li>
                  </ul>
                  <p>7.2 O valor total do prêmio é de até R$ 10.000,00 (dez mil reais).</p>
                  <p>7.3 O prêmio é pessoal, intransferível e não conversível em dinheiro.</p>
                  <p>7.4 O bilhete de viagem poderá ser emitido em até 12 meses a contar da data do sorteio.</p>
                  <p>7.5 Custos adicionais como taxas de embarque, seguro viagem, transporte local, refeições e demais despesas pessoais serão de responsabilidade do contemplado.</p>
                  <p>7.6 O ganhador deverá possuir visto americano B1/B2 válido para a data da viagem. A Viva America não se responsabiliza pela obtenção ou regularização do visto.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left font-semibold">
                  8. APURAÇÃO E DIVULGAÇÃO
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>8.1 O sorteio ocorrerá de forma pública, presencial e transparente, no palco principal da Expo Cristã, no dia 16/09/2025.</p>
                  <p>8.2 O nome do ganhador será anunciado no evento e divulgado nos canais oficiais da Viva America.</p>
                  <p>8.3 O vencedor deverá entrar em contato com a Viva America por meio do e-mail academy@vivaamerica.com para validar seu direito ao prêmio.</p>
                  <p>8.4 O vencedor precisará disponibilizar informações adicionais (como cópia de documento de identidade, CPF e dados necessários para emissão da passagem) para a efetivação da entrega.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left font-semibold">
                  9. PRESTAÇÃO DE CONTAS
                </AccordionTrigger>
                <AccordionContent>
                  <p>9.1 A Viva America fará a prestação de contas do sorteio junto à SPA/MF, conforme exigido pela legislação, no prazo legal após a realização do evento.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left font-semibold">
                  10. DIVULGAÇÃO DO REGULAMENTO
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>10.1 O regulamento completo estará disponível no stand da Viva America e nos canais oficiais da marca.</p>
                  <p>10.2 Todos os materiais de divulgação incluirão informações essenciais: data do sorteio, prêmio, número de autorização oficial e referência à LGPD.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left font-semibold">
                  11. DISPOSIÇÕES GERAIS
                </AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>11.1 A promotora poderá substituir o prêmio por outro de valor equivalente em caso de indisponibilidade.</p>
                  <p>11.2 É vedada a participação de funcionários da Viva America, seus familiares diretos e demais envolvidos na organização.</p>
                  <p>11.3 Casos omissos ou dúvidas serão resolvidos pela promotora, respeitando a legislação aplicável.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}