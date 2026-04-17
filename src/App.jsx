import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CapturaDados from './components/CapturaDados';
import ExibeDados from './components/ExibeDados';

function App() {
  const [resultado, setResultado] = useState(null);
  const [historico, setHistorico] = useState([]);

  const calcularSimulacao = (dados) => {
    const { inicial, aporte, juros, periodo } = dados;
    
    // Evita erro de divisão por zero se juros for 0
    const taxa = juros === 0 ? 0.00001 : juros;

    // Fórmula: Valor Futuro = Vi*(1+i)^n + P*(((1+i)^n - 1)/i)
    const valorFinal = inicial * Math.pow(1 + taxa, periodo) + 
                       aporte * ((Math.pow(1 + taxa, periodo) - 1) / taxa);
    
    const totalInvestido = inicial + (aporte * periodo);
    const jurosAcumulados = valorFinal - totalInvestido;
    const rentabilidade = ((valorFinal - totalInvestido) / totalInvestido) * 100;

    const novoResultado = {
      valorFinal,
      totalInvestido,
      jurosAcumulados,
      numAportes: periodo,
      rentabilidade,
      data: new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    setResultado(novoResultado);
    setHistorico([novoResultado, ...historico]);
  };

  return (
    <div className="container py-5" style={{ maxWidth: '650px', backgroundColor: '#fff' }}>
      <h4 className="mb-4 fw-bold">V&P Investimentos</h4>
      
      <CapturaDados aoCalcular={calcularSimulacao} aoLimpar={() => setResultado(null)} />
      
      <ExibeDados dados={resultado} />

      {historico.length > 0 && (
        <div className="mt-5">
          <div className="d-flex justify-content-between align-items-center mb-2 px-1">
            <h6 className="fw-bold mb-0">Histórico de simulações</h6>
            <small className="text-muted">{historico.length} simulações</small>
          </div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-light">
                <tr className="small text-muted">
                  <th>Data</th>
                  <th className="text-end">Valor final</th>
                </tr>
              </thead>
              <tbody>
                {historico.map((item, index) => (
                  <tr key={index}>
                    <td className="text-muted small">{item.data}</td>
                    <td className="text-end fw-bold">
                      {item.valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;