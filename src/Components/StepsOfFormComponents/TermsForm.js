import React from 'react'
import { Grid, Row, Column, Modal } from 'carbon-components-react'
import { Description } from '../../assets/styles/General-styles'
import WrapperForm from '../WrapperForm'
import { TitleArticle } from '../../assets/styles/General-styles'

const TermsForm = ({ step, onBack, formData, validationSchema, handleSubmit, nextStep }) => {
    return (
        <>
            <WrapperForm
                validationSchema={validationSchema}
                formData={formData}
                step={step}
                onBack={onBack}
                nextStep={nextStep}
                handleSubmit={handleSubmit}
                title="Términos y condiciones">
                <Grid >
                    <Row>
                        <Column >
                            <TitleArticle>Visión General</TitleArticle>
                            <Description>

                                Los siguientes términos son parte de un acuerdo entre usted e IBM. Al acceder o usar este sitio, usted reconoce que ha leído, entendido y acepta las disposiciones de estos términos y el cumplimiento de todas las leyes y reglamentaciones aplicables, incluso las leyes y reglamentaciones sobre el control de exportación y reexportación. Si usted no está de acuerdo con estos términos, no utilice este sitio.

                                IBM puede, sin previo aviso, en cualquier momento, modificar las presentes condiciones de uso y cualquier otra información contenida en este sitio. IBM también puede efectuar mejoras o cambios a los productos, servicios o programas descritos en este sitio en cualquier momento sin previo aviso.
                                General

                                Este sitio contiene avisos de propiedad e información de derechos de autor, cuyos términos deben observarse y seguirse. Consulte la pestaña con el título “Información sobre derechos de autor y marcas registradas” para obtener información relacionada.

                                IBM le concede un permiso limitado, no exclusivo, intransferible para acceder y exhibir las páginas Web en este sitio como un cliente o cliente potencial de IBM siempre y cuando cumpla con estos Términos de Uso, y todos los derechos de autor, marcas registradas y otros avisos de propiedad permanecen intactos. Usted sólo puede utilizar un rastreador para rastrear este sitio, según lo permitido por el protocolo robots.txt de este sitio, e IBM puede bloquear cualquiera de los rastreadores a su entera discreción. El uso autorizado en virtud de este acuerdo no es de naturaleza comercial (por ej.: usted no puede vender el contenido al que acceda en o a través de este sitio). Queda prohibido cualquier otro uso de este sitio.

                                Excepto para el permiso limitado estipulado en el párrafo anterior, IBM no le concede ningún derecho o licencia explícita o implícita bajo ninguna patente, marca registrada, derecho de autor, u otros derechos de propiedad o propiedad intelectual. Usted no puede duplicar ninguna parte del contenido de este sitio en otro sitio Web o en cualquier otro medio. Cualquier software y otros materiales que se encuentren disponibles para su descarga, acceso u otra utilización de este sitio con sus propios términos de licencia se regirán por tales términos, condiciones y avisos. El incumplimiento de tales términos o cualquiera de los términos en este sitio resultará en la terminación automática de cualquier derecho que se le haya otorgado, sin previo aviso, y usted deberá destruir inmediatamente todas las copias del material descargado en su posesión, custodia o control.
                                Declaración de límite de responsabilidad

                                De vez en cuando, este sitio Web puede contener imprecisiones técnicas o errores tipográficos, y no garantizamos la exactitud de la información publicada. Por favor confirme si está usando las páginas más actualizadas en este sitio Web, así como la precisión e integridad de la información antes de utilizarla para la toma de decisiones relacionadas con los servicios, productos u otros temas descritos en este sitio.

                                En el caso de que alguna autoridad judicial competente determine que algún término de estos Términos de Uso no se pueda hacer cumplir en algún caso, la vigencia del resto de estos Términos de Uso no se verá afectada, siempre y cuando tal incumplimiento no afecte materialmente los derechos de las partes en virtud de los presentes Términos de Uso.
                            </Description>
                        </Column>
                    </Row>
                </Grid>
            </WrapperForm>
        </>
    )
}

export default TermsForm