import type { DatosYa } from '@/tipos';

export const ya7: DatosYa = {
  nombre: 'Fortalecimiento Familiar del cuidado y la crianza de la niñez',
  imagen: 'ya7',
  ruta: 'fortalecimiento-familiar',
  definicion:
    'Es crucial fortalecer a las familias para proteger y cuidar a la niñez, asegurando vínculos emocionales y cumpliendo normativas como la Declaración Universal de Derechos Humanos. La asistencia a las familias, respaldada por la Convención sobre los Derechos del Niño y la Constitución Nacional, es esencial para la crianza. El Plan Nacional de Desarrollo (2018-2022) destaca la importancia de las familias como garantes de la protección de los niños, requiriendo oportunidades y capacidades para enfrentar su entorno y asegurar el bienestar de todos sus miembros. La familia desempeña un papel crucial en la socialización y protección integral de la niñez.',
  hay_datos: false,
  indicadores: [
    {
      nombre: 'GINI',
      ruta: 'gini',
      archivo: 'ya7-1',
      hay_datos: true,
      umbral: 0.48,
      explicacion_umbral:
        'De acuerdo con los Objetivos de Desarrollo Sostenible y el CONPES 3918, Colombia reducirá la desigualdad, alcanzando un GINI de 0,480.',
      explicacion: 'Indica la desigualdad económica en un momento y territorio específico.',
      definicion:
        'El Coeficiente de Gini en Colombia es una medida estadística que evalúa el nivel de desigualdad en la distribución de ingresos entre los diferentes hogares de la población colombiana. Este índice varía de 0 a 1, donde 0 representa una distribución perfectamente equitativa de ingresos, es decir, todos los hogares tienen el mismo ingreso, y 1 indica desigualdad total, con todo el ingreso concentrado en un solo hogar. El Gini para Colombia se calcula a partir de datos relacionados con los ingresos de los hogares y proporciona una indicación clave sobre la equidad económica en el país. Un Gini más bajo sugiere una distribución más equitativa de los ingresos, mientras que un Gini más alto indica una mayor disparidad en la distribución de ingresos entre los hogares colombianos. Este indicador es utilizado por autoridades gubernamentales, investigadores y analistas económicos para comprender y abordar los desafíos de desigualdad en la sociedad colombiana.',
      metodologia: 'Metodología propia del DANE',
      unidad: 'Coeficiente',
      fuente_numerador: 'Departamento Nacional de Planeación - Terridata',
      fuente_denominador: 'Departamento Nacional de Planeación - Terridata',
      desagregacion: 'Municipal',
      contexto:
        'En el contexto colombiano, el Coeficiente de Gini se ha convertido en una herramienta crucial para evaluar la distribución de ingresos en el país. Este indicador, que varía entre cero y uno, ofrece una perspectiva reveladora sobre la desigualdad económica en Colombia. Cuando el Gini se acerca a cero, sugiere una distribución más equitativa de los ingresos entre los hogares, mientras que un valor cercano a uno indica una concentración significativa de ingresos en un segmento reducido de la población. La curva de Lorenz, que representa visualmente esta distribución, se ha convertido en un elemento esencial para comprender la disparidad de ingresos en el país. En un esfuerzo por abordar la desigualdad económica, Colombia ha implementado diversas políticas y programas destinados a mejorar la equidad en la distribución de ingresos y proporcionar oportunidades más equitativas para todos los ciudadanos. A través de la evaluación continua del Coeficiente de Gini, Colombia busca avanzar hacia una sociedad más inclusiva y justa en términos económicos. Más información: https://datos.bancomundial.org/indicator/SI.POV.GINI?locations=CO.',
      interpretacion:
        'El Coeficiente de Gini, empleado con frecuencia para evaluar la desigualdad en la distribución de ingresos en un país, se expresa como la discrepancia entre la curva de Lorenz y la línea de equidistribución en términos gráficos. Este coeficiente varía de cero a uno, reflejando diferentes niveles de desigualdad. La curva de Lorenz, que representa visualmente la distribución de ingresos en una población, muestra en el eje vertical el porcentaje acumulado de ingresos y en el horizontal el porcentaje acumulado de hogares o personas correspondientes a dichos ingresos. En una distribución perfectamente equitativa, la curva seguiría una línea de 45 grados; en caso de desigualdad total, la curva se ubicaría sobre el eje X. En el caso de Colombia, el Gini proporciona información valiosa sobre la disparidad económica en la sociedad. Rango del Coeficiente de Gini: 0 a 1: El Gini varía de 0 a 1, donde 0 representa la perfecta igualdad (todos los hogares tienen ingresos idénticos) y 1 indica desigualdad total (todo el ingreso se concentra en un solo hogar). Interpretación del Coeficiente: Cercano a 0: Un Gini cercano a 0 sugiere una distribución de ingresos más equitativa. Esto implica que los ingresos están repartidos de manera más uniforme entre los hogares. Cercano a 1: Un Gini cercano a 1 indica una mayor desigualdad. Esto significa que hay una concentración significativa de ingresos en un segmento más pequeño de la población.',
    },
    {
      nombre: 'Pobreza Monetaria',
      ruta: 'pobreza-monetaria',
      archivo: 'ya7-2',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador.',
      explicacion: 'Indica la proporción de pobreza monetaria en un mismo momento y territorio específico.',
      definicion:
        'La pobreza monetaria en el contexto colombiano se refiere a la condición en la que un hogar o individuo no cuenta con ingresos suficientes para cubrir sus necesidades básicas y satisfacer un nivel mínimo de vida digna. Se mide típicamente mediante indicadores que evalúan los ingresos y gastos de los hogares en relación con ciertos umbrales de pobreza establecidos. En Colombia, estos umbrales pueden incluir el costo de la canasta básica de alimentos y otros gastos esenciales. La pobreza monetaria no solo aborda la falta de recursos financieros, sino también las limitaciones para acceder a servicios esenciales como educación, salud y vivienda. Las mediciones de pobreza monetaria son fundamentales para entender el alcance de la privación económica en la población colombiana y son utilizadas para orientar políticas públicas y programas destinados a reducir la pobreza y mejorar las condiciones de vida de aquellos que se encuentran en situación de vulnerabilidad económica.',
      metodologia: 'Metodología propia del DANE',
      unidad: 'Porcentaje',
      fuente_numerador: 'Departamento Nacional de Planeación - Terridata',
      fuente_denominador: 'Departamento Nacional de Planeación - Terridata',
      desagregacion: 'Municipal',
      contexto:
        'En el contexto de la pobreza monetaria en Colombia, se evidencia la persistencia de desafíos significativos en la distribución de recursos económicos. A pesar de avances económicos y sociales, una proporción considerable de la población colombiana enfrenta condiciones de vida precarias y limitaciones económicas. La medición de la pobreza monetaria, que considera los ingresos y gastos de los hogares, proporciona un indicador clave para comprender la magnitud del problema. Colombia ha implementado políticas y programas sociales para abordar la pobreza, pero factores como la desigualdad de ingresos, el acceso limitado a oportunidades educativas y laborales, así como las disparidades regionales, contribuyen a la persistencia de la pobreza. En este contexto, el gobierno y las organizaciones pertinentes continúan trabajando para desarrollar estrategias efectivas que no solo alivien la pobreza monetaria inmediata, sino que también aborden sus causas estructurales, buscando así construir un camino hacia una sociedad más equitativa y próspera. Más Información: https://www.dane.gov.co/files/lineas-de-tiempo/pobreza-monetaria-ninez-adolescencia-en-colombia/index.html#:~:text=La%20l%C3%ADnea%20de%20pobreza%20monetaria,en%20situaci%C3%B3n%20de%20pobreza%20monetaria.',
      interpretacion:
        'Indica la proporción de hogares que se encuentran bajo la condición de pobreza monetaria. Si el valor es 28 quiere decir que 28 de cada 100 familias no cuentan con los recursos económicos suficientes para llegar a fin de mes. La línea de pobreza monetaria es el valor en dinero que necesita una persona al mes para adquirir una canasta básica de alimentos, servicios y otros bienes mínimos para vivir. Si una persona tiene un ingreso menor a este valor se considera en situación de pobreza monetaria. Por otra parte, la línea de pobreza monetaria extrema es el valor en dinero que necesita una persona mensualmente para adquirir una canasta básica alimentaria que le provea el mínimo requerimiento calórico para subsistir.',
    },
  ],
};
