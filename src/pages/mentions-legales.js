import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import mentions from '../data/images/mentions/mentionsBG.jpg'

import { createGlobalStyle } from 'styled-components'

import * as fontFiles from "../fonts/index";

const Mentions = ({location}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        file(relativePath: {
          regex:"/mentionsBG/"
        }) {
          childImageSharp{
            sizes(maxWidth: 700) {
                ...GatsbyImageSharpSizes
            }
          } 
        }
      }
    `}
    render={data => (
      <Layout location={location}>
      <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: "Mentions légales"}]}
          title="7th Heaven - Mentions Légales"
          /> 
        <ContainerIng style={{zIndex:`-100`}}>
          <ImageContainer>
              <ImageNoval>
<div>
<h1>MENTIONS LÉGALES DU SITE « 7thheaven.fr »</h1>

<h2>Partie 1 : GDPR &amp; notre politique de confidentialité</h2>

<p><strong>Relatif aux utilisateurs du site Web et à la communication par courrier électronique</strong></p>

<p>Nous traiterons tous vos renseignements personnels de manière confidentielle (bien que nous nous réservions le droit de divulguer ces informations dans les circonstances décrites ci-dessous). Nous le conserverons sur un serveur sécurisé et nous nous conformerons pleinement à toutes les lois applicables en matière de protection des données et de protection des données en vigueur en France.</p>

<p>Nous pouvons collecter des informations sur votre position sur Internet (par exemple, l&#39;URL d&#39;origine, l&#39;adresse IP, les types de domaine tels que .co.uk et .com), le type de votre navigateur, le pays et l&#39;indicatif téléphonique du pays où se trouve votre ordinateur, les pages de notre site Web qui ont été consultées lors de votre visite, le contenu sur lequel vous avez cliqué et les termes de recherche que vous avez saisis sur notre site Web («Informations utilisateur»). Nous pouvons collecter ces informations même si vous ne vous enregistrez pas avec nous.Vous devez savoir que ce site est surveillé et peut collecter des informations sur votre visite pour nous aider à améliorer la qualité de notre service.Nous confirmons que les Informations personnelles que vous avez fournies nous fournir (ou qui est disponible sur les registres publics) et toute information utilisateur à partir de laquelle nous pouvons vous identifier, est conservée conformément à l&#39;enregistrement que nous avons auprès du Commissariat aux données. Nous utilisons vos informations uniquement aux fins suivantes:</p>

<p>À des fins statistiques ou d&#39;enquête, afin d&#39;améliorer ce site Web et ses services;</p>

<p>Pour vous servir le contenu du site Web;</p>

<p>Pour administrer ce site web;</p>

<p>Si vous y consentez, vous informer des produits ou des offres spéciales susceptibles de vous intéresser.</p>

<p>Vous acceptez de ne pas nous opposer à ce que nous communiquions avec vous aux fins susmentionnées, que ce soit par téléphone, par courrier électronique ou par écrit, et vous confirmez que rien de ce qui précède n&#39;est considéré comme une violation de vos droits. droits en vertu de la réglementation de 2003 sur la protection des renseignements personnels et les communications électroniques (directive CE).</p>

<p>Vous devez savoir que si la police ou toute autre autorité réglementaire ou gouvernementale enquêtant sur des activités présumées illégales nous demande de fournir vos informations personnelles et / ou les informations de l&#39;utilisateur, nous avons le droit de le faire.</p>

<p>Lorsque vous participez à l&#39;un de nos concours ou tirages au sort, vous fournissez votre nom, votre adresse électronique et votre adresse postale. Si vous gagnez, nous vous enverrons le prix à l&#39;adresse indiquée et vous en informerons par e-mail. Lorsque vous vous inscrivez à un concours ou à un tirage au sort, vous pouvez également choisir de figurer sur notre liste de diffusion pour recevoir des notifications sur les promotions, les offres spéciales et les nouveaux ajouts au site Web. Vous pouvez vous désabonner de cette liste en suivant les instructions de désinscription figurant dans tout courrier électronique reçu.</p>

<p>Communication / abonnement par e-mail - afin de mieux comprendre les besoins de nos utilisateurs, nous suivons les réponses à nos e-mails - par exemple, pour voir quels liens sont les plus populaires dans les newsletters, et pour enregistrer et suivre les réponses à nos messages marketing. Pour ce faire, nous utilisons des pixels GIF, également appelés «balises pixel». Il s&#39;agit de petits fichiers d&#39;image placés dans le corps de nos messages électroniques. Ils nous permettent de savoir si un message a été ouvert et de suivre les clics sur les liens contenus dans le message. Vous pouvez vous désabonner de toutes les communications par courrier électronique via le lien &quot;désabonnement&quot; situé en bas de tous les courriels.</p>

<p>Comment accéder, mettre à jour et effacer vos informations personnelles - si vous souhaitez savoir si nous conservons des données personnelles vous concernant ou si vous avez des questions sur notre politique de confidentialité ou sur les données personnelles que nous détenons par nous, en relation avec l&#39;un des Sites. , vous pouvez contacter le délégué à la protection des données via:</p>

<p>Courrier postal à cette adresse: Responsable de la protection des données, Montagne Jeunesse International Ltd, Cour Astral, Avenue Central, Parc énergétique Baglan, Port Talbot, SA12 7AX, Royaume-Uni.</p>

<p>Téléphone: +44 (0) 1639 861550</p>

<p>Courriel: cservices@montagnejeunesse.com</p>

<p>Sur demande, nous vous fournirons une copie lisible des données personnelles que nous conservons à votre sujet. Nous pouvons exiger une preuve de votre identité et facturer des frais minimes (ne dépassant pas les frais maximum légaux pouvant être facturés) pour couvrir les frais d&#39;administration et d&#39;affranchissement.</p>

<p>Tous les contenus, marques commerciales, logos et images associées affichés sur ce site sont la propriété de leurs propriétaires respectifs. Tous les droits sont réservés.</p>

<p>Revenez régulièrement pour voir les mises à jour ou les modifications de notre politique de confidentialité. Les questions concernant cette politique doivent être adressées comme suit:</p>

<p>Customer Services
my7thheaven.com
Astral Court
Baglan Energy Park
Wales
SA12 7AX</p>

<h2 id="partie2termesetconditions">Partie 2 : Termes et conditions</h2>

<p>Le site Web Montagne Jeunesse (www.7thheaven.fr) place des cookies, qui sont de petits fichiers de données, sur votre ordinateur ou votre appareil de poche. C&#39;est une pratique standard pour tous les sites Web.</p>

<p>Les cookies sont essentiels pour nous aider à offrir à nos clients un site Web et une expérience de magasinage en ligne de haute qualité, et certains collectent des informations sur le comportement de navigation et d&#39;achat. Pour plus d&#39;informations sur les cookies, notamment sur la manière dont nous les utilisons et comment les désactiver, consultez notre section Contrôle des cookies en cliquant sur le lien ci-dessous.</p>

<p>En utilisant et en naviguant sur le site Web Montagne Jeunesse, vous acceptez que les cookies soient utilisés conformément à notre politique. Si vous ne consentez pas, vous devez désactiver les cookies ou vous abstenir d&#39;utiliser le site.</p>
</div>              
              </ImageNoval>
          </ImageContainer>
        </ContainerIng>  
      </Layout>
    )}
  />
)  


export default Mentions


const ContainerIng = styled.div`
  position: relative;
  font-family: "Montserrat";
`

const ImageContainer = styled.div`
  max-width:2000px;
  overflow:hidden;
`
const ImageNoval = styled.div`
  padding-top: 150px;
  text-align: justify;
  padding-left: 5%;
  padding-right: 5%;
  height: 2500px;
  background-image: url(${mentions});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1024px) {
    height: 3200px;
  }
  @media (max-width: 576px) {
    height: 4200px;
  }
`