const results = [
  {
    monthlyPlanning:
      "La planificación es de muy corto plazo y el alcance limitado, lo cual lo restringe fuertemente a la hora de analizar proyectos o aprovechar ciertas oportunidades de mercado. Acción sugerida: ampliar el plazo de planeamiento a un año.",
    annualPlanification:
      "Si bien planifica las ventas, no hace lo mismo con los egresos lo cual podría llegar a limitar el análisis para encarar, por ejemplo ciertos proyectos de inversión. Acción sugerida: Incorporar egresos a la planificación. ",
    annualPlanificationIncomeExpenses:
      "Si bien cuenta un sistema de  planificación financiera, esto no sería suficiente para analizar proyectos de inversión un poco más complejos. Acción sugerida: Incorporar la planificación económica para mejorar las herramientas de análisis de su compañía.",
    economicAndFinancialBudget:
      "Su compañía cuenta con una completa planificación de corto plazo, lo cual le permite tener una visión integral de su negocio. Sin embargo para proyectos de mayor envergadura o de repago a largo plazo sería necesario considerar herramientasde planificación que acompañen ese horizonte de tiempo extendido. Acción sugerida: Incoporar planificación de largo plazo.",
    strategicPlan:
      "Su empresa cuenta con un plan estratégico y una planificación económico financiera anual, lo cual le permite herramientas robustas para anticiparse a escenarios cambiantes y el desarrollo de nuevos negocios. Su nivel es óptimo.",
  },
  {
    hirePeople:
      "Se encuentra muy solo en la operación, lo cual  podría ser una limitación seria a la hora de crecer en su negocio. Acción sugerida: Incorporar colaboradores que le permitan descargar tareas operativas.",
    collaborators:
      "Cuenta con un equipo acotado y se reserva todas las decisiones. Este diseño de organización lo podría limitar en el proceso de crecimiento, ya que dificultará la captación y retención de talentos. Acción sugerida: Incoporar perfiles complementarios y comenzar a delegar decisiones operativas.",
    delegateDecisions:
      "Si bien delega algunas decisiones basado en la confianza que tiene en ciertos colaboradores, esto hace que la organización dependa de las personas y sea menos eficiente. Acción sugerida: Revisar la organización, capacitar a las personas para ocupar los puestos o incorporar profesionales expertos. ",
    professionalEmployees:
      "Incorporó profesionales expertos pero Ud se mantiene dentro del ámbito de la operación, probablemente limitando el desempeño de sus colaboradores. Acción sugerida: Delegar las funciones operativas y enfocarse en las decisiones estratégicas, el monitoreo de la operación y el desarrollo de nuevos negocios.",
    professionalizeTheCompany:
      "Cuenta con un equipo profesional y autónomo que le permite enfocarse en el desarrollo de nuevos negocios. Su nivel es óptimo.",
  },
  {
    ownerGivesInstructions:
      "Su organización se adapta a las personas y esto genera pérdida de eficiencia operativa. Acción sugerida: Generar documentación que permita mejorar los procesos.",
    peopleKnowTheirTasks:
      "Ha generado alguna documentación de procesos y esto le permitió mejorar el rendimiento en algunas áreas de la compañía. Acción sugerida: Alinear la organización con los procesos para aumentar el nivel de eficiencia",
    documentProcesses:
      "Alineó la organización a los procesos, lo cual generó una mejora sustancial en la productividad de la compañía, pero cree que este avance no alcanza para enfrentar nuevas regulaciones, procesos más sofisticados o bien para asegurar un salto de calidad de sus productos y así potenciar la imagen de su empresa.. Acción sugerida: Implementar un sistema de gestión de la calidad.",
    qualityManagement:
      "Cuenta con procesos, una organización alineada a los mismos y un sistema de calidad. Sin embargo exigencias incrementales de clientes o industrias requieren un enfoque más integral al problema. Acción sugerida: Implementar un modelo de mejora continua que lleve procesos, productos y servicios a un nuevo nivel, promoviendo la innovación permanente.",
    continuousImprovement:
      "Ha implementado un modelo de mejora continua. Su nivel es óptimo.",
  },
  {
    informationExcel:
      "Dispone de información de ventas exclusivamente en un formato de Excel, lo cual lo expone a altos riesgos de control interno y  limita seriamente el análisis de su negocio. Acción sugerida: Incorporar proyección de gastos para poder alimentar una planificación financiera básica.",
    excelSalesAndExpenses:
      "Cuenta con un sistema de información básico que incluye ingresos y egresos, pero en una plataforma no robusta como es el Excel, lo cual debilita su sistema de control interno. Acción sugerida: Implementar un sistema de gestión que le permita centralizar la información y mejorar el nivel de confiabilidad.",
    managementSystem:
      "Ha implementado un sistema de gestión, pero la información contable se registra de manera separada, está expuesto a errores de registración y mayores tiempos para la obtención de información de gestión. Acción sugerida: Implementar un sistema integrado (ERP) y capacitar al personal, lo que le permitirá reducir los niveles de error y mejorar los tiempos de emisión.",
    partialIntegratedSystem:
      "Implementó parcialmente un sistema integrado (ERP). Eso hace que no esté aprovechando todos los beneficios, subutilizando la inversión realizada. Acción sugerida: Implementar los módulos restantes y reforzar la capacitación del personal para maximizar su aprovechamiento.",
    totalSystemIntegrated:
      "Ha implementado un sistema integrado (ERP). Su nivel es óptimo.",
  },
  {
    ownCapitalFamily:
      "Depende de su propio capital o del apoyo familiar para potenciar el desarrollo del negocio. Esto acota su capacidad para encarar el crecimiento de su empresa. Acción sugerida: Negociar con sus proveedores condiciones de entrega y pago que permitan mejorar las condiciones de financiamiento de su empresa.",
    paymentProviders:
      "Los proveedores han permitido expandir su negocio con condiciones ventajosas, pero cree que podría lograr mayor eficiencia con otro tipo de créditos. Acción sugerida: Preparar la compañía y sus sistemas de información para facilitarle el acceso a créditos bancarios de corto plazo.",
    bankCredit:
      "A mejorado su performance financiera con créditos bancarios, pero para hacerlo debe garantizar personalmente los préstamos. Acción sugerida: Evalúe las condiciones y prepare su empresa para acceder a créditos prendarios e hipotecarios.",
    mortgageCredit:
      "Los créditos prendarios e hipotecarios le han permitido un nuevo salto de expansión, aunque están limitados al capital existente o la compra de determinados bienes. Acción sugerida: Evaluar herramientas financiera que le permitan financiar proyectos sin el límite de su patrimonio.",
    riskManagement:
      "Ha implementado herramientas de financiamiento adecuadas a los proyectos de inversión. Su nivel es óptimo.",
  },
  {
    notBusinessFamily:
      "Es el fundador de la empresa o uno de los socios fundadores, no trabaja con familiares y considera que su empresa es propia. Acción sugerida: Tomar conciencia de su condición de dueño de una empresa familiar en potencia.",
    doesNotShareInformationWithFamily:
      "Ha tomado conciencia de que su empresa es familiar, pero no generó aun los canales apropiados para conectar el sistema empresarial con el familiar, ya sea porque sus hijos son jóvenes o porque no sabe como hacerlo. Acción sugerida: Buscar en la familia a la persona con el perfil adecuado para gestionar la relación familia-empresa o, en su defecto, un asesor externo y comenzar a desplegar acciones.",
    shareInformationWithFamily:
      "Está comunicando informalmente a su familia las novedades del negocio, esto le permite mantener una buena conexión entre la familia y la empresa. Acción sugerida: Cuando sus hijos alcancen la edad de 16 años o más, implementar ambitos formales en los que sea clara la distinción entre el espacio de la familia y el de la 'familia-empresaria'.",
    shareInformationWithFamilySpecific:
      "La distinción de ámbitos es un logro. Su familia se reconoce como 'familia empresaria' y opera en concecuencia. Acción sugerida: Cuando la mayoría de sus hijos estén entre los 18 y los 25 años, evaluar alternativas de programas de formación en roles y resposabilidad, especialmente de los Accionistas o Socios y los Directores.",
    trainTheFamily:
      "Reconoce a la 'familia empresaria' y la capacita para el ejercición de los roles futuros. Su nivel es óptimo.",
  },
];

export default results;
