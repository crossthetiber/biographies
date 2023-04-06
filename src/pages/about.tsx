import React, { ReactNode, useState } from "react";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby"
import {
  EuiAccordion,
  EuiIcon,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageSideBar,
  EuiPanel,
  EuiSideNav,
  EuiSideNavItemType,
  EuiListGroup,
  EuiListGroupItem,
  EuiSpacer,
  EuiHorizontalRule,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
} from '@elastic/eui'


export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

type SiteProps = {
  site: {
    siteMetadata: {
      title: string,
      description: string
    }
  }
}

const sideNav: EuiSideNavItemType<any>[] = [
  {
    name: "About",
    id: 'about-nav',
    items: [
      {
        name: "This Project",
        id: 'about1',
        href: "#this-project",
        icon: <EuiIcon type="eql" />
      },
      {
        name: "The Translation",
        id: 'about2',
        href: "#the-translation",
        icon: <EuiIcon type="editorComment" />
      },
      {
        name: "Additional Information",
        id: 'about3',
        href: "#additional",
        icon: <EuiIcon type="magnifyWithPlus" />
      },
      {
        name: "Bibliography",
        id: 'about4',
        href: "#bibliography",
        icon: <EuiIcon type="documentation" />
      },
      {
        name: "Journals and Periodicals",
        id: 'about5',
        href: "#journals",
        icon: <EuiIcon type="document" />
      },
      {
        name: "Archival Materials",
        id: 'about6',
        href: "#archival",
        icon: <EuiIcon type="tableOfContents" />
      },
      {
        name: "Investigatory Case Files",
        id: 'about7',
        href: "#investigative",
        icon: <EuiIcon type="bullseye" />
      },
      {
        name: "Additional Websites",
        id: 'about8',
        href: "#websites",
        icon: <EuiIcon type="console" />
      },
      {
        name: "Project Staff",
        id: 'about9',
        href: "#staff",
        icon: <EuiIcon type="starEmpty" />
      }
    ]
  }
]




const AboutPage = () => {

  const [isSideNavOpenOnMobile, setisSideNavOpenOnMobile] = useState(false)

  const toggleOpenOnMobile = () => {
    setisSideNavOpenOnMobile(!isSideNavOpenOnMobile)
  }

  return (
    <Layout>
      <EuiPage paddingSize="none" direction="row">
        <EuiPageSideBar paddingSize="m" sticky>
          <EuiSideNav items={sideNav} toggleOpenOnMobile={() => toggleOpenOnMobile()} isOpenOnMobile={isSideNavOpenOnMobile} />
        </EuiPageSideBar>
        <EuiPageBody paddingSize="m" restrictWidth={'90%'} panelled>
          <EuiPageContent hasBorder={false} hasShadow={false} color="plain" paddingSize="m">
            <EuiPageContentBody restrictWidth={'90%'}>
              <EuiFlexGroup gutterSize="xs" direction="column" alignItems="stretch">
                <EuiFlexItem grow>
                  <EuiText>
                    <h2 id="this-project">About this Project</h2>

                    <p>Book of Remembrance: Biographies of Catholic Clergy and Laity Repressed in the Soviet Union (USSR)
                      from 1918 to 1953 website presents brief biographies, translated from Russian by Geraldine Kelley,
                      of Catholic clergy and laity repressed by the Soviet regime during the reigns of Lenin and Stalin.</p>

                    <p>The biographies were collected by the Apostolic Administration for Catholics of North European Russia
                      and published in 2000 in Moscow, in Bronislav Chaplitskii, Irina I. Osipova, Kniga pamiati: martirolog
                      Katolicheskoi tserkvi v SSSR. [Book of Remembrance: A Martyrology of the Catholic Church in the USSR]
                      (Moskva: Serebrianye niti, 2000).</p>

                    <p>While personal and geographical names were transliterated for this digital project by catalogers at the
                      University of Notre Dame Libraries using Library of Congress transliteration system, many personal names
                      were originally Anglicized by the translator. The biographies thus contain both forms, Anglicized and
                      transliterated, which allows users to search by various spellings of the name.</p>

                    <p>For more information about the background and context of this translation project, please see About the Translation.</p>

                    <p>Questions and comments concerning this site should be directed to Natasha Lyandres</p>
                  </EuiText>
                </EuiFlexItem>
                <EuiSpacer size="m" />
                <EuiHorizontalRule size="full" margin="xl" />
                <EuiFlexItem grow>
                  <EuiText>
                    <h2 id="the-translation">About the Translation</h2>

                    <h3>Background and Context</h3>

                    <p>The biographies posted on this website are translated from Kniga pamiati: Martirolog Katolicheskoi
                      Tserkvi v SSSR [Book of Remembrance: A Martyrology of the Catholic Church in the USSR] (Moscow, 2000),
                      which memorializes the life and death of 1,900 Latin and Eastern Rite Catholics – clergy, religious and
                      lay – who were persecuted under the Soviet regime. The entries were collected and edited by Father
                      Bronisƚaw Czaplicki and Irina Osipova on behalf of the Martyrology Commission for the Jubilee Year
                      2000 established by the Apostolic Administration for Catholics of North European Russia. It is truly
                      amazing that such a voluminous collection was assembled and prepared for publication by the year 2000,
                      only nine years after the opening of the archives of the state security organs of the former Soviet
                      Union, the source of most of the material. The compilers consulted with colleagues in regional archives
                      spread across the entire country. The archival sources are listed in the Bibliography</p>

                    <p>The work of the Martyrology Commission laid the foundation for the next step to be taken. On January
                      30, 2002, the Conference of Catholic Bishops of the Russian Federation inaugurated the “Catholic New
                      Martyrs of Russia,” a program to advance the canonization of Russian Catholic martyrs of the twentieth
                      century. Sixteen were chosen for this formal procedure. The process toward their beatification was
                      assigned the title “Cause of the Beatification or the Declaration of Martyrdom of Archbishop Edward
                      Profittlich, SJ, and Fifteen Companions.” The cause was officially opened on May 31, 2003, and from
                      that date these sixteen martyrs are known as “Servants of God”:</p>

                    <EuiListGroup flush={false} bordered={false} gutterSize="none" maxWidth={false} id="martyrs">
                      <EuiLink href="/biographies/138"><EuiListGroupItem label="Archimandrite Fabian Abrantowicz, MIC" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/105"><EuiListGroupItem label="Mother Catherine (Anna) Abrikosova, OP" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/129"><EuiListGroupItem label="Father Epifanius Akulov" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/279"><EuiListGroupItem label="Monsignor Konstanty Budkiewicz" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/281"><EuiListGroupItem label="Father Franciszek Budrys" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/1859"><EuiListGroupItem label="Father Paweƚ Chomicz" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/1485"><EuiListGroupItem label="Archimandrite Andrzej Cikoto, MIC" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/1580"><EuiListGroupItem label="Father Antoni Czerwiński" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/1867"><EuiListGroupItem label="Father Potapy Emelianov" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/357"><EuiListGroupItem label="Sister Rose of the Heart of Mary (Galina) Jętkiewicz, OP" wrapText iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/533"><EuiListGroupItem label="Camilla Kruczelnicka" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/616"><EuiListGroupItem label="Bishop Antoni Malecki" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/1678"><EuiListGroupItem label="Father Janis Mendriks, MIC" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/1485"><EuiListGroupItem label="Bishop Edward Profittlich, SJ" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/1935"><EuiListGroupItem label="Father Stanisƚaw Szulmiński, SAC" iconType={"dot"} /></EuiLink>
                      <EuiLink href="/biographies/1132"><EuiListGroupItem label="Father Jan Trojgo" iconType={"dot"} /></EuiLink>
                    </EuiListGroup>

                    <p>Fr. Czaplicki was the original Postulator for the Cause. He has been succeeded by Fr. Alexey
                      Yandushev-Rumyantsev. On January 17, 2014, the cause of Servant of God Edward Profittlich, SJ, was
                      transferred to Estonia, and the original process was renamed “Cause of the Beatification or the
                      Declaration of Martyrdom of Bishop Antoni Malecki and Fourteen Companions.”</p>

                    <p>Kniga pamiati includes other Servants of God (as well as some who have already been beatified)
                      whose causes originated in other jurisdictions and are proceeding under other titles. Their
                      current titles have been added to their names.</p>

                    <p>The seminal work of Fr. Czaplicki and Irina Osipova is posted on the website of the Catholic New
                      Martyrs of Russia www.catholicmartyrs.org, complete with Fr. Czaplicki’s introductory essay on the
                      history of the persecutions, photographs (“mug shots”) of hundreds of the clergy and laity profiled,
                      and a bibliography. The editors anticipated that the information gathered prior to 2000 would be
                      supplemented over time, and the office of the Postulator has served as the recipient and custodian
                      of this on-going documentation. Full-length books, dissertations, articles, and letters from relatives,
                      former camp-mates, and parishioners add to what is known about Catholics persecuted under the Soviet
                      regime. The referenced website is the best source of the most current information.</p>

                    <p>Of particular note are the in-depth articles regarding the fifteen candidates for beatification
                      prepared by the office of the Postulator of the Cause. Translations of these articles are forthcoming.</p>

                    <p>It should be noted that not all 1,900 persons included in the Martyrology died a martyr’s death. They were
                      all persecuted by the State to one extent or another, some shot by firing squad, others sent to “corrective
                      labor” camps where their death was likely, others banished to remote corners of the Soviet Union where they
                      languished and suffered for years. Some were sentenced and resentenced more than three times over the course
                      of thirty years. “Fate thereafter unknown” are the final words for 874 entries. Others, however, returned to
                      their home parishes or emigrated abroad and continued their heroic ministry well into old age, in Africa, Brazil,
                      Australia, England and the United States. A few were still living as of the date of publication (2000), but at
                      the present moment (2014) I believe there is only one survivor, Nijole Sadunaite.</p>

                    <h3>Notes Regarding the Translation</h3>

                    <p>The original entries were in an “encyclopedic” style, and I made no attempt to alter the style in the translation.</p>

                    <p>In some cases I was able to refer to the work cited by the editors in support of an entry, and when I noticed a
                      detail that the editors for whatever reason had omitted, I included it if I believed it would be of interest to
                      an English-speaking reader. For example, Fr. Roman Dzwonkowski usually included the diocese for which a priest was
                      ordained and sometimes the number of parishioners and the name of the local church, and I tended to insert these
                      details into the translation.</p>

                    <p>In some cases I went beyond the work cited to find additional information, especially concerning former camp inmates
                      who were amnestied and emigrated to the United States. This information was then noted at the end of the entry, as a
                      “Translator’s Note.” Especially helpful with respect to the Volga Germans and the Black Sea Germans were the websites
                      of various heritage organizations, especially the Center for Volga German Studies, www.cvgs.org, and www.blackseagr.org
                      for the Black Sea Germans. These websites and any other sources used are included in the “Translator’s Note.”</p>

                    <p>The names of cities and towns changed in at least two ways: in some instances an entirely new name was assigned. Thus
                      a person could have been born in St. Petersburg, educated in Petrograd, worked in Leningrad, and died in St. Petersburg
                      – all at the same street address. In other instances, the name remained the same, but the language changed. Thus another
                      person could have been born in Lemberg, educated in Lwów, and worked in Lviv – all names that drive from the original
                      Latin Leopolis!</p>

                    <p>In the first case, where the name itself was changed, I tended to use the name in effect at the time. In the second case,
                      I attempted at first to use the language of the government at the time (e.g., Łuck in 1938, Lutsk in 1948), but I soon
                      abandoned that effort in favor of current [2014] spelling – thus Lvov and Lwów are both translated as Lviv, and Ƚuck is Lutsk,
                      even when it was part of Poland. This created some odd sentences, such as “…he returned to Poland, where he served in the
                      Diocese of Lutsk.” Reader, please forbear!</p>

                    <p>I relied on the Wikipedia entry for the current spelling of geographical names because this seemed to be the source that
                      will prevail in establishing the conventions used.</p>

                    <p>Family names presented a more sensitive issue. Fr. Czaplicki declined to note nationality for a number of reasons. In any
                      event, transliterating non-Russian names from Cyrillic using conventional transliteration schemes resulted in gibberish. I
                      tried to use German spellings for German names, Polish spellings for Polish names, etc. Unfortunately, except in a very few
                      instances, I was not able to distinguish Ukrainian names. Regardless of the fact that many of these people lived in present-day
                      Ukraine, many of them lived in regions that were previously in eastern Poland or they were arrested for “espionage on behalf of
                      Poland” or “Polish nationalism,” or they were amnestied “as Polish citizens” in 1942 or 1943 and released from the camps. Polish
                      spellings seemed warranted. As to Lithuanian, Latvian and Estonian names – these will need to be reviewed and revised.</p>

                    <p>As for the Christian given names, I attempted to match the name with the language of the family name (e.g., Andrzej, Andrey,
                      Andreas – Polish, Ukrainian, German) – but in some cases, I used an Anglicized form, especially where the person has become widely
                      known under an Anglicized name – for example, Mother Catherine Abrikosova.</p>

                    <p>I intentionally Anglicized all names of churches (e.g., St. Anthony of Padua, St. Casimir), as this seems to be a common convention.</p>

                    <p>Geraldine Kelley, May 2014</p>
                  </EuiText>
                </EuiFlexItem>
                <EuiSpacer size="m" />
                <EuiHorizontalRule size="full" margin="xl" />
                <EuiFlexItem>
                  <EuiText>
                    <h2 id="additional">Additional Information</h2>

                    <p>Fr. Bronisƚaw Czaplicki “A history of the Persecutions: Catholic Church in Russia.” Originally published in Russian in Bronislav
                      Chaplitskii, Irina I. Osipova, Kniga pamiati: martirolog Katolicheskoi tserkvi v SSSR. (Moskva: Serebrianye niti, 2000) pp. XIX-LXIII.
                      The article was translated by Geraldine Kelley in November 2013. <EuiLink href="https://biographies.library.nd.edu/assets/Kniga%20pamiati%20-%20Czaplicki%20Essay-e97832192dff612576f71701487270e7.docx">Download “A history of the Persecutions: Catholic Church in Russia.”</EuiLink> [DOCX]</p>

                    <p><EuiLink href="https://biographies.library.nd.edu/assets/Kniga%20pamiati%20-%20Bibliography-855db3915cb54fa1ee2f21b8281e2c42.docx">Download Bibliography / List of Sources. Last Updated April 2014</EuiLink> [DOCX]</p>

                    <p>Online version of Bronislav Chaplitskii, Irina I. Osipova, Kniga pamiati: martirolog Katolicheskoi tserkvi v SSSR. (Moskva: Serebrianye niti,
                      2000) is available from this site: <EuiLink href="http://www.catholicmartyrs.org/index.php?mod=pages&page=martirologglavnaja">Catholic Newmartyrs of Russia</EuiLink></p>

                    <p>The biographies have been also posted on this Russian website: <EuiLink href="http://catholic.ru/">КАТОЛИЧЕСКАЯ РОССИЯ</EuiLink></p>

                    <p>The biographies have been translated into Italian and are available from this site: <EuiLink href="www.russiacristiana.org">Russia Christiana</EuiLink></p>
                  </EuiText>
                </EuiFlexItem>
                <EuiSpacer size="m" />
                <EuiHorizontalRule size="full" margin="xl" />
                <EuiFlexItem>
                  <EuiFlexGroup>
                    <EuiFlexItem grow>
                      <EuiText>
                        <h2 id="bibliography">Bibliography</h2>

                        <h3>Knigi Pamiati [Books Of Remembrance]</h3>

                        <EuiListGroup flush={false} bordered={false} gutterSize="s" maxWidth={false}>
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>“Przechodniu, powiedz Polsce…”: Księga Pamięci Polaków – ofiar kumunizmu – pochowanych na Lewaszowskim Pustkowiu pod Sankt-Petersburgium. </em>
                              V. 1. St. Petersburg: Rada Ochrony Pamięci Walk i Męczeństwa, 1995.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Belaia kniga: O zhertvakh politicheskikh repressii. Samara oblast’. </em>
                              Samara, 1997.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Bol’ liudskaia: Kniga pamiati tomichei, repressirovannykh v 30-40-e, nachale 50-x godov. </em>
                              Tomsk, 1991.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Butovskii polygon, 1937-1938 gg.: Kniga Pamiati zhertv politicheskikh repressii. </em>
                              Moskva, 1997-1998.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Emel’ianov, E.I.
                              <em> My ne zabyli: Kniga pamiati zhertv nezakonnykh politicheskikh repressii. </em>
                              Rostov-na-Donu, 1996.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Khotelos’ by vsekh poimenno nazvat’. </em>
                              Khabarovsk, 1998.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Kniga pamiati: Poimennyi spisok repressirovannykh zhitelei Kol’skogo poluostrova, a takzhe inostrannykh grazhdan, prozhivavshikh v Murmanskoi oblasti. </em>
                              Murmansk, 1999.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Memorial’noe kladbishche Sandormokh. </em>
                              St. Petersburg, 1999.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Nevskii, G.V., G.F. Dobronozhenko, and L.S. Shabalova, eds.
                              <em> Pokaianie: Komi respublikanskii martirolog zhertv massovykh politicheskikh repressii. </em>
                              Syktyvkar, 1998-2012.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Odesskii martirolog: Repressii protiv sviashchennosluzhitelei i veruiushchikh v Odesse i Odesskoi oblasti. </em>
                              Vyp. 3. 1995.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Rekviem: Kniga pamiati zhertv politicheskikh repressii na Orlovshchine. </em>
                              Orel, 1994-1998.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Repressii 30-40-x gg. v Tomskom krae. </em>
                              Tomsk: Izd. Tomskogo Universiteta, 1991.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Tragediia naroda: Kniga pamiati zhertv politicheskikh repressii Respubliki Marii El. </em>
                              Ioshkar-Ola, 1996 (v. 1); 1997 (v. 2).
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Vlasova, L.T.
                              <em> Kniga pamiati zhertv politicheskikh repressii Kurskoi oblasti. </em>
                              Vol. 1. Kursk, 1996.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Vspomnim vsekh poimenno. </em>
                              Magadan, 1996.
                            </span>
                          }
                          />

                        </EuiListGroup>

                        <h3>History - Biography - Memoirs</h3>

                        <EuiListGroup flush={false} bordered={false} gutterSize="s" maxWidth={false}>
                          <EuiListGroupItem wrapText label={
                            <span>
                              “Beatifikatsiia muchenits iz Novogrudka.” [no author]
                              <em> Svet Evangeliia </em>
                              20 Feb 2000).
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              “Doroga v ochakh Gospodnikh smert’ sviatykh Ego…” [no author]
                              <em>Svet Evangeliia </em>
                              (12 Mar. 2000).
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Abrikossow, Dmitrii.
                              <em> Revelations of a Russian Diplomat. </em>
                              Seattle: Univ. of Washington Press, 1964.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Applebaum, Anne.
                              <em> Gulag: A History. </em>
                              New York: Doubleday, 1993.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Bloch, C. “Deportacje ludności polskiej do Związku Radzieckiego w okresie II wojny swiatowej.” In:
                              <em> Odrodzenie Kościoƚa Katolickiego w byƚym ZSRR. </em>
                              Lublin, 1993.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Braun, Leopold.
                              <em> In Lubianka’s Shadow: The Memoirs of an American Priest in Stalin’s Moscow, 1934-1945. </em>
                              Ed. Gary M. Hamburg. South Bend, Ind.: Univ. of Notre Dame, 2006.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Bukowicz, Jan.
                              <em> The Marian Martyrs of Rosica </em>
                              (www.padrimariani.org)
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Burauskaite, Birute, ed.
                              <em> Lietuvos gyventojų genocidas. </em>
                              Vol. 2 (A-J). 1944-1947. Vilnius, 1998.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Chirkov, Iu.I.
                              <em> A bylo vse tak… </em>
                              Moskva, 1991.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Ciszek, Walter, J.
                              <em>  Z Bogiem w Rosji (1939-1963). </em>
                              London: Katolicki Ośrodek Wydawniczy Veritas, 1988. Published in English under the title
                              <em> With God in Russia. </em>
                              New York: McGraw-Hill, 1964; reprinted San Francisco: Ignatius, 1997.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Danilov, V.
                              <em> Moi put’ k Bogu i k Katolicheskoi Tserkvi. </em>
                              Polotsk, 1997.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Doberski, Fr.
                              <em> Zapiski uznika </em>
                              (Warsaw, 1990); also in
                              <em> Lietuvos aidas </em>
                              (1998), no. 30.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Dolzhanskaia, Liia, and Irina Osipova, eds.
                              <em> “Dorogaia Ekaterina Pavlovna…”: Pis’ma zhenshchin i detei, pis’ma v ikh zashchitu, 1920-1936. </em>
                              St. Petersburg, 2005.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em></em>
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Dunn, Dennis J.
                              <em> The Catholic Church and Russia: Popes, Patriarchs, Tsars and Commissars </em>
                              Burlington, Vt.: Ashgate, 2004.


                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Dzwonkowski, Roman, SAC, and Jan Paƚyga, SAC.
                              <em> Za wschodnią granicą 1917-1993: O Polakach i Kościele w dawnym ZSRR. </em>
                              2nd Edition. Warszawa, 1995.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Dzwonkowski, Roman, SAC.
                              <em> Kościoƚ katolicki w ZSSR, 1917-1939: Zarys historii. </em>
                              Lublin: Tow. Nauk. Katolickiego Uniwersytetu Lubelskiego, 1997.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Dzwonkowski, Roman, SAC.
                              <em>  Losy duchowieństwa katolickiego w ZSSR, 1917-1939: Martyrologium. </em>
                              Lublin: Tow. Nauk. Katolickiego Uniwersytetu Lubelskiego, 1998
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Efimova, M. “Pamiati Episkopa Vladivostokskogo.”
                              <em> Zaria Vladivostoka </em>
                              (1998), no. 1.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Efimova, M. “Sud’ba episkopa.”
                              <em> Svet Evangeliia </em>
                              (15 Mar. 1998).
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Ginzburg, Evgeniia.
                              <em> Within the Whirlwind. </em>
                              New York: Harcourt, Brace Jovanovich, 1981.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Gnedkov, Iu. “Nashi pastyri.”
                              <em> Svet Evangeliia </em>
                              (31 Jan. 1999).
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Golovanov, S.
                              <em> Katolichestvo i Rossiia. </em>
                              St. Petersburg, 1998.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Gorska, M.T., CSFN. “Męczennice z Nowogrodka,”
                              <em> L’osservatore Romano </em>
                              (Polish Ed., 2000), No. 2, pp. 55-58.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Grulich, Rudolf.
                              <em> Die römisch-katholische Kirche in der Sowjetunion. </em>
                              München: Kirche in Not/Ostpriesterhilfe, 1990.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Hamburger, G.
                              <em> Verfolgte Christen: Bericht aus unserer Zeit. </em>
                              Graz, 1977.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Hoffman, Deborah.
                              <em> The Littlest Enemies: Children in the Shadow of the Gulag. </em>
                              Bloomington, Ind.: Slavica, 2009.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Il’kevich, N. “Pochetnee byt’ gluptsom riadom s Gomerom, Vergiliem, nezheli geniem v nashi dni: Shtrikhi v portrety Khrizogona Przhemotskogo.”
                              <em> Gody </em>
                              (Smolensk), 1999, no. 4.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Il’kevich, N. “Prervannoe molchanie.”
                              <em> Gody </em>
                              (Smolensk), 1999, no. 4.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Jeńcy w Griazowcu i Suzdalu: Alfabetyczne wykazy 3640 jeńców wojennych z 1939 roku – Polaków i przedwojennych obywateli polskich innych narodowości – przetrzymywanych w sowieckich obozach w Griazowcu i Suzdalu. </em>
                              Rybarska, Eva, Kazimierz Banaszek et al. Warszawa: Ośrodek KARTA, 1998.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Khanevich, V.A., ed.
                              <em> Iz istorii Zemli Tomskoi 1917-1921: Sibirskii Belostok. </em>
                              Tomsk, 1998.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Kozlov, S. “Prelat Konstantin Romual’d Budkevich.” In:
                              <em>  Krov’ muchenikov est’ semia Tserkvi. </em>
                              Moskva, 1999.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Kuczyński, Józef.
                              <em> Między parafią a ƚagrem. </em>
                              Paris: Editions Spotkania, 1985..
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Kumor B. “Konkordat rosyjski z 3.08.1847 i utworzenie diecezji tyraspolskiej.” Manuscript. Lublin, 1998. (Paper prepared for a symposium dedicated to the 150th anniversary of the Tiraspol Diocese.)
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Kumor, B. “Kościól i katolicy w cesarstwie rosyjskim.” In:
                              <em> Odrodzenie Kościóƚa Katolickiego w ZSSR. </em>
                              Lublin, 1993.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Leoni P. Spia del Vaticano! Roma, 1959. Translated by G.D. Murav’eva and E.L. Kassirova, supplemented with archival materials by Irina Osipova under the title
                              <em> “Shpiony Vatikana!”: O tragicheskom puti sviashchennikov-missionerov: vospominaniia P’etro Leoni; obzor materialov sledstvennykh del. </em>
                              Bratonezh, 2012.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Leoni, P. and George Maloney.
                              <em>  He Asked for It!: Ten Years’ Slave Labor in Communist Russia. </em>
                              St. Louis, Mo.: Queen’s Work, 1956.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Liturgicheskii kalendar’ Katolicheskoi Tserkvi v Rossii: Leto Gospodne 2000. </em>
                              Moskva, 1999.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Lorenz, Klaus, ed.
                              <em> Die römisch-katholische Kirche in der Sowjetunion. </em>
                              München: Kirche in Not/Ostpriesterhilfe, 1990.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Madaƚa, T. Polscy
                              <em> . księża katoliccy w więzieniach i ƚagrach sowieckich od 1918 g. </em>
                              Lublin, 1996.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Mailleux, Paul.
                              <em> Exarch Leonid Feodorov: Bridgebuilder Between Rome and Moscow. </em>
                              New York: P.J. Kenedy, 1964.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Markov, V. I. et al., eds.
                              <em> Iz istorii Zemli Tomskoi, 1917-1921: Narod i vlast’. Sbornik dokumentovv i materialov. </em>
                              Gosudarstvennyi arkhiv Tomskoi oblast, 1997.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              McCullagh.
                              <em> Bolshevik Persecution of Christianity. </em>
                              New York: E.P. Dutton and Company, 1924.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Miodek, Augustyn, OMI.
                              <em> If Only for an Hour: Ludwick Wrodarczyk, OMI, 1907-1943. Ludwik Wrodarczyk, OMI, 1907-1943. </em>
                              Rome: Oblate General Postulation, 1992. Published in Polish under the title
                              <em> Ludwik Wrodarczyk, OMI, 1907-1943. </em>
                              Lubliniec, 1995.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Moroz, Walerian M. and Andrzej Datko, eds.
                              <em> Męczennicy za wiarę 1939-1945. </em>
                              Warszawa: Michalineum, 1996.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Nichols, Aidan, O.P. “Ekaterina Sienskaya Abrikosova (1892-1936): A Dominican Uniate Foundress in the Old Russia,” 72 848 (1991)
                              <em> New Blackfriars, </em>
                              164-172.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Novitskii [Nowicki], Donat.
                              <em> Moi vospominaniia. </em>
                              Manuscript. Archive of Gniezno Archdiocese. Akty popechitetia emigratsii. F. III/28.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Odrodzenie Kościoƚa Katolickiego w byƚym ZSRR. </em>
                              Odrodzenie Kościoƚa Katolickiego w byƚym ZSRR.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Osipova, I. Vozliubiv Boga i sleduia za Nim…”
                              <em> Goneniia na Katolicheskuiu Tserkov’ v SSSR. </em>
                              Moskva: Serebriannye niti, 1999. Translated by Geraldine Kelley under the title
                              <em> Brides of Christ, Martyrs for Russia: Mother Catherine Abrikosova and the Eastern Rite Dominican Sisters. </em>
                              Unpublished.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Osipova, Irina.
                              <em> V Iazvakh svoikh sokroi menia…: Goneniia na Katolicheskuiu Tserkov’ v SSSR. Po materialam sledstvennykh i lagernykh del. </em>
                              Moskva: Serebriannye niti, 1996. Translated by Malcolm Gilbert under the title
                              <em> Hide Me Within Thy Wounds: The Persecution of the Catholic Church in the USSR. </em>
                              Fargo, North Dakota, 2003.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Parfentiev, Pavel. “Servant of God, Maria Catherine Sienskaia (Anna Ivanovna Abrikosova).” Trans. Joseph Lake. www.en.catholicmartyrs.org
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Parfentiev, Pavel.
                              <em> Mat’ Ekaterina (Anna Ivanovna Abrikosova). </em>
                              St. Petersburg, 2004; Trans. Joseph Lake (unpublished).
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Peshkova, L. “Kharbin – Russkii i katolicheskii.”
                              <em> Svet Evangeliia </em>
                              (17 Jan. 1999)
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Polacy na Łotwie.  </em>
                              Walewandar, E., ed. Lublin, 1993.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Polacy w Kościele Katolickim w ZSRR. </em>
                              Walewandar, E., ed. Lublin, 1991.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Pospelovskii, D.V.
                              <em> Russkaia Pravoslavnaia Tserkov’ v XX veke. </em>
                              Moskva: Respublika, 1995
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Reznikova, I.
                              <em> Katoliki na Solovkakh, 1925-1937. </em>
                              Manuscript. St. Petersburg, 1997.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Rossi, Jacques.
                              <em> The Gulag Handbook: An Encyclopedia Dictionary of Soviet Penitentiary Institutions and Terms Relating to the Forced Labor Camps. </em>
                              Trans. William A. Burhans. New York: Paragon, 1989.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Rozstrzelani w Charkowie: Alfabetyczny spis 3739 jeńców polskich ze Starobielska rozstrzelanych w kwietniu-maju 1940, wedƚug źródeƚ sowieckich, polskich i niemieckich. </em>
                              Skrzyńska-Pƚawińska, Maria, et al. Warszawa: Ośrodek KARTA, 1996.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Rozstrzelani w Katyniu: Alfabetyczny spis 4410 jeńców polskich z Kozielska rozstrzelanych w kwietniu-maju 1940, wedƚug źródeƚ sowieckich, polskich i niemieckich. </em>
                              Skrzyńska-Pƚawińska, Maria, et al. Warszawa: Ośrodek KARTA, 1996.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Rozstrzelani w Katyniu: Alfabetyczny spis 4410 jeńców polskich z Kozielska rozstrzelanych w kwietniu-maju 1940, wedƚug źródeƚ sowieckich, polskich i niemieckich. </em>
                              Skrzyńska-Pƚawińska, Maria, et al. Warszawa: Ośrodek KARTA, 1995.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Rozstrzelani w Twerze: Alfabetyczny spis 6314 jeńców polskich z Ostaszkowa rozstrzelanych w kwietniu-maju 1940 i pogrzebanych w Miednoje, wedƚug źródeƚ sowieckich, polskich i niemieckich. </em>
                              Skrzyńska-Pƚawińska, Maria, et al. Warszawa: Ośrodek KARTA, 1997.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Rutkowski, Franciszek.
                              <em> Arcybiskup Jan Cieplak, 1857-1926: Szkic Biograficzny. </em>
                              Warszawa, 1934.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Sadunaite, Nijole.
                              <em> A Radiance in the Gulag: The Catholic Witness of Nijole Sadunaite. </em>
                              Manassas, Va.: Trinity Communications, 1987.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Sadunaite, Nijole.
                              <em> Gottes Untergrundkämpferin: Vor Gericht, Erinnerungen, Briefe. </em>
                              Stein-am-Rhein: Christiana-Verlag, 1985.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Schnurr, Joseph.
                              <em> Die Kirchen und das religiöse Leben der Russlanddeutschen, Katolischer Teil. </em>
                              Stuttgart, 1980.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Shkarovskii, M.V., N. Iu. Cherepenina, A.K. Shiker.
                              <em> Rimsko-Katolicheskaia Tserkov’ na Severo-Zapade Rossii v 1917-1945 gg. </em>
                              St. Petersburg: Nestor, 1998.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>Sloskans, Boleslas and François Rouleau.
                              <em> Témoin de Dieu chez les sans-Dieu: Du bagne des îles Solovki à la deportation en Sibérie: Journal de prison. </em>
                              Mareil-Marly: Aide à l’Église en détresse, 1986. Translated and published in German under the title
                              <em> Zeuge Gottes bei den Gotflosen. </em>
                              München, 1988.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Smirnov, M. “Sviashchennik Sergii Solov’ev.”
                              <em> Krov’ muchenikov est’ semia Tserkvi. </em>
                              Moskva, 1999.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Snyder, Timothy.
                              <em> Bloodlands: Europe Between Hitler and Stalin. </em>
                              New York: Basic Books, 2010.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Sokolovskyi, Oleksandr Klymentii
                              <em> Tserkva Khrystova, 1920-1940: Peresliduvannia khrystyian v SSSR. </em>
                              Kyiv: Kairos, 1999.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Spiski ssyl’nykh, 1941-1942. Litovskoe Biuro svedenii vzaimopomoshchi. Typescript. Kaunas, 1942.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Striker, Gerd, ed.
                              <em> Pravoslavnaia Tserkov’ v sovetskoe vremia (1917-1991): Materialy i dokumenty po istorii otnoshenii mezhdu gosudarstvom i Tserkov’iu. </em>
                              Vol. 1. Moskva: Propilei, 1995.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Svidnitskii, I. “Vospominaniia uznika.”
                              <em> Svet Evangeliia. </em>
                              1998, no. 35; 1999, no. 5.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Szymanik, Teresa, and Stanisƚaw Bogdanowicz.
                              <em> Akta biskupa Edwarda Aleksandra Wƚadysƚawa hrabiego O’Rourke w Rosyjskim Państwowym Archiwum Historycznym w Sankt Petersbugu. </em>
                              Pelplin: Bernardinium, 1999.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Tolochko, M. “Tsvety na mogilu sviashchennika.”
                              <em> Sovetskaia Belorussiia </em>
                              (11 Feb. 1992).
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Uwiezieni w Borowiczach: Alfabetyczny wykaz 5795 Polaków i przedwojennych obywateli polskich inych narodowości wiezionych w obosie jenieckim nr 270 NKWD ZSSR w Księga Borowiczach w latach 1944-1949. </em>
                              Vol. 1. Warszawa: Ośrodek KARTA, 1997.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Viola, Lynne.
                              <em> The Unknown Gulag: The Lost World of Stalin’s Special Settlements. </em>
                              N.Y.: Oxford Univ. Press, 2007.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Von Burman, OSB, Deacon Vasilii [Basil].
                              <em> Leonid Fedorov: Zhizn’ i deiatel’nost’. </em>
                              Moskva, 1992.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Wenger, Antoine.
                              <em> Rome et Moscou, 1900-1950. </em>
                              Paris: Desclée de Brouwer, 1987. Translated and published in Russian under the title
                              <em> Rim i Moskva, 1900-1950. </em>
                              Moskva: Russkii put’, 2000.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Zaikina, I. “Usƚyszeliśmy ich glossy.” In:
                              <em> Skazani jako “Szpiedzy Watykanu”: Z historii Kościoƚa katolickiego w ZSRR 1918-1956. </em>
                              Roman Dzwonkowski, SAC, ed. Ząbki: Apostolicum, 1998.
                            </span>
                          }
                          />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Zugger, Christopher.
                              <em> The Forgotten: Catholics of the Soviet Empire from Lenin through Stalin. </em>
                              Syracuse, N.Y.: Syracuse Univ. Press, 2001.
                            </span>
                          }
                          />
                        </EuiListGroup>
                      </EuiText>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiHorizontalRule size="full" margin="xl" />
                <EuiFlexItem>
                  <EuiFlexGroup>
                    <EuiFlexItem grow>
                      <EuiText>
                        <EuiListGroup flush={false} bordered={false} gutterSize="s" maxWidth={false}>
                          <h2 id="journals">Journals and Periodicals</h2>

                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Bozhim putem </em>
                              (London), 1975, nos. 3-4
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Khristianin. </em>
                              1931, Nos. 2-4.
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Kitezh.  </em>
                              1931, no. 1
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Lietuvos aidas </em>
                              (Vilnius). 1998, no. 30
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Logos </em>
                              (Briussel’-Moskva). 1993, no. 48
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Nash krai: Istoricheskii zhurnal </em>
                              (St. Petersburg). 2000, no. 1
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Parafyialna gazeta. </em>
                              1994-1995
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Przegląd Katolicki. </em>
                              1924. No. 8
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Sibiriak (Belostok). </em>
                              1991, no. 6
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              <em>Vospominaniia sibiriakov. </em>
                              1991, no. 4.
                            </span>
                          } />
                        </EuiListGroup>
                      </EuiText>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiHorizontalRule size="full" margin="xl" />
                <EuiFlexItem>
                  <EuiFlexGroup>
                    <EuiFlexItem grow>
                      <EuiText>
                        <EuiListGroup flush={false} bordered={false} gutterSize="s" maxWidth={false}>
                          <h2 id="archival">Archival Materials</h2>

                          <EuiListGroupItem wrapText label={
                            <span>
                              Citations of Russian archival materials are by fond, opis’, delo, list and abbreviated f., op., d., l.
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Assumptionist Archives (Rome)
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              GARF (Gosudarstvennyi arkhiv Rossiiskoi Federatsii) [State Archive of the Russian Federation], fonds 8406, 8409 and 8419
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Central Archive, FSB (Federal’naia Sluzhba Bezopasnosti), Russian Federation
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Regional Archives of the FSB
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Arkhangel’skaia oblast’
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Chuvash Republic
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Kemerovo oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Komi Republic
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Kostoma oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Krasnodar krai
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Krasnoyarsk krai
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Kursk oblast’ (I.M. 6906)
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Magadan oblast’
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Mari El Republic
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Mordovian Republic
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Novosibirsk oblast’
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Republic of Karelia
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Republic of Northern Ossetia-Alania
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, St. Petersburg and Leningrad oblast’
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of the Directorate, FSB, Yekaterinburg and Sverdlovsk oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archives of the Directorates for the Ministries of Internal Affairs
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Arkhangelsk oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Cheliabinsk oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Bashkortostan Republic
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Karelian Republic
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Komi Republic
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Novgorod oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Pskov oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Ryazan oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Smolensk oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Vologoda oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Yekaterinburg oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of Directorate, SBU, Drohobych oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of Directorate, SBU, Lviv oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of Directorate, SBU, Ternopil oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of Directorate, SBU, Khmelnytskyi oblast
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              Archive of Directorate, KNB, Republic of Kazakhstan
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              GITs (Glavnyi informatsionnyi tsentr) [Main Information Center]
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              ITs (Informatsionnyi tsentr) [Information Center]
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              TsA MVD (Tsentral’nyi arkhiv, Ministerstvo vnutrennikh del) [Central Archive, Ministry of Internal Affairs]
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              TsDNI (Tsentr dokumentatsii noveishei istorii) [Center for Documentation of Recent History]
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              TsGAOO (Tsentral’nyi gosudarstvennyi arkhiv obshchestvennykh organizatsii) [Central State Archive of Public Organizations]
                            </span>
                          } />
                          <EuiListGroupItem wrapText label={
                            <span>
                              TsPSIP (Tsentr pravovoi statistiki i informatsii pre Prokurature) [Center for Legal Statistics and Information], Karaganda oblast’
                            </span>
                          } />
                        </EuiListGroup>
                      </EuiText>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiHorizontalRule size="full" margin="xl" />
                <EuiFlexItem>
                  <EuiText>
                    <h2 id="investigative">Investigatory Case Files</h2>

                    <p>Note: References to case files are by the lead name on the group case or by Investigatory Matter Number.</p>

                    <p>Investigatory Files in the <strong>Central Archive, FSB, Russian Federation</strong></p>

                    <EuiListGroup flush={false} bordered={false} gutterSize="none" maxWidth={false}>
                      <EuiListGroupItem wrapText label={
                        <em>Abrantovich, F. I.</em>}
                        iconType={"dot"}
                      />
                      <EuiListGroupItem wrapText label={
                        <em>Abrikosova, Anna Ivanovna et al. (1923)</em>}
                        iconType={"dot"}
                      />
                      <EuiListGroupItem wrapText label={
                        <em>Abrikosova, Anna Ivanovna et al. (1933/34)</em>}
                        iconType={"dot"}
                      />
                      <EuiListGroupItem wrapText label={
                        <em>Ott, Alisa Benediktovna</em>}
                        iconType={"dot"}
                      />
                      <EuiListGroupItem wrapText label={
                        <em>Soloviev, Sergei Mikhailovich</em>}
                        iconType={"dot"}
                      />
                      <EuiListGroupItem wrapText label={
                        <em>Remov, Nikolai Federovich</em>}
                        iconType={"dot"}
                      />
                      <EuiListGroupItem wrapText label={
                        <em>Titov, Leonid Timofeevich</em>}
                        iconType={"dot"}
                      />
                      <EuiListGroupItem wrapText label={
                        <span>Investigatory Matter Nos. 888, 62582, 82307, 95215 (German Catholics), 109597, 547540, 590614</span>}
                        iconType={"dot"}
                      />
                    </EuiListGroup>

                    <p>Investigatory Files in the <strong>Archive of the Directorate of the FSB for St. Petersburg and Leningrad oblast’</strong></p>
                    <EuiListGroup flush={false} bordered={false} gutterSize="none" maxWidth={false}>
                      <EuiListGroupItem wrapText label={
                        <span>Danzas, Julia Nikolaevna</span>}
                        iconType={"dot"}
                      />
                      <EuiListGroupItem wrapText label={
                        <span>Investigatory Matter Nos. 3587-42, 6632, 6633, 14436 and P-83605 (Fr. Paweƚ Chomicz)</span>}
                        iconType={"dot"}
                      />
                    </EuiListGroup>

                    <p>Investigatory Files in the <strong>Central State Archives of Public Organizations</strong> (Ukraine) (TsGAOO)</p>

                    <EuiListGroup flush={false} bordered={false} gutterSize="none" maxWidth={false}>
                      <EuiListGroupItem wrapText label={
                        <span>Investigatory Matter Nos. 27, 411, 890, 891, 1733, 2751, 7884, 11380, 26838, 26944, 29674, 29675,
                          29765, 29995, 30392, 30958, 33203, 46041, 47042, 52751, 53905, 60589, 61236, 61494, 62016, 62587, 64218,
                          66457, 68067, 68087, 82307, 82309, 632856</span>}
                        iconType={"dot"}
                      />
                    </EuiListGroup>

                    <p>Investigatory Files in the Archive of the <strong>Directorate of the State Security Service (SBU), Lviv oblast</strong></p>

                    <EuiListGroup flush={false} bordered={false} gutterSize="none" maxWidth={false}>
                      <EuiListGroupItem wrapText label={
                        <span>Investigatory Matter No. 3210 (Home Army)
                        </span>}
                        iconType={"dot"}
                      />
                    </EuiListGroup>

                    <p>Investigatory Files in the <strong>Archive of the Lithuanian Ministry of Internal Affairs</strong></p>

                    <EuiListGroup flush={false} bordered={false} gutterSize="none" maxWidth={false}>
                      <EuiListGroupItem wrapText label={
                        <span>Investigatory Matter No. 218176</span>}
                        iconType={"dot"}
                      />
                    </EuiListGroup>

                    <p>Investigatory Files in the <strong>Archive of the KGB, Republic of Belarus</strong></p>

                    <EuiListGroup flush={false} bordered={false} gutterSize="none" maxWidth={false}>
                      <EuiListGroupItem wrapText label={
                        <em>Lukanin, I.S. [Józef Lukjanin]</em>}
                        iconType={"dot"}
                      />
                      <EuiListGroupItem wrapText label={
                        <em>Sloskan, B.</em>}
                        iconType={"dot"}
                      />
                    </EuiListGroup>
                  </EuiText>
                </EuiFlexItem>
                <EuiHorizontalRule size="full" margin="xl" />
                <EuiFlexItem>
                  <EuiText>
                    <h2 id="websites">Additional Websites</h2>
                    <EuiListGroup flush={false} bordered={false} gutterSize="none" maxWidth={false}>
                      <EuiListGroupItem wrapText label={
                        <span>
                          <EuiLink href="http://www.catholicmartyrs.org/">www.catholicmartyrs.org </EuiLink>
                          - Postulatura for Russian New Martyrs &gt; Biblioteka saita &gt; Kniga pamiati
                        </span>
                      }
                      />
                      <EuiListGroupItem wrapText label={
                        <span>
                          <EuiLink href="http://www.en.catholicmartyrs.org/">www.en.catholicmartyrs.org </EuiLink>
                          - English page for the Postulatura for Russian New Martyrs
                        </span>
                      }
                      />
                      <EuiListGroupItem wrapText label={
                        <span>
                          <EuiLink href="http://www.catholic.ru/">www.catholic.ru </EuiLink>
                          - Website posting biographies
                        </span>
                      }
                      />
                      <EuiListGroupItem wrapText label={
                        <span>
                          <EuiLink href="http://www.padrimariani.org/">www.padrimariani.org </EuiLink>
                          - Congregation of Marians of the Immaculate Conception (MIC)
                        </span>
                      }
                      />
                      <EuiListGroupItem wrapText label={
                        <span>
                          <EuiLink href="http://www.cvgs.cu-portland.edu/">www.cvgs.cu-portland.edu </EuiLink>
                          - Center for Volga German Studies
                        </span>
                      }
                      />
                      <EuiListGroupItem wrapText label={
                        <span>
                          <EuiLink href="http://www.blackseagr.org/">www.blackseagr.org </EuiLink>
                          - Black Sea German Research
                        </span>
                      }
                      />
                    </EuiListGroup>
                  </EuiText>
                </EuiFlexItem>
                <EuiHorizontalRule size="full" margin="xl" />
                <EuiFlexItem>
                  <EuiText>
                    <h2 id="staff">Project Staff</h2>

                    <EuiFlexGroup gutterSize="xs" direction="row">
                      <EuiFlexItem grow={2}>
                        <EuiText>
                          <strong>Translator and Initiator: </strong>
                        </EuiText>
                      </EuiFlexItem>
                      <EuiFlexItem grow={7}>
                        <EuiAccordion id="accordion1" buttonContent="Geraldine Kelley, Ph.D" paddingSize="s">
                          <EuiPanel paddingSize="none" hasShadow={false} hasBorder={false}>
                            <EuiText>
                              <p>I began my study of Russian at Indiana University, where I earned a B.A. in Russian
                                with honors in 1967. I completed a Ph.D. in Slavic Languages and Literatures at the
                                University of Wisconsin-Madison in 1976.</p>

                              <p>I taught Russian language and literature courses at the University of Utah for three
                                years (1978-1981), then worked in various administrative positions in Denver, Colorado.
                                The collapse of the Soviet Union sparked a short-lived renewal in Russian language
                                programs that afforded me the opportunity to teach Russian at the University of Colorado
                                at Denver and local community colleges from 1992 to 1995. I returned to administrative
                                positions and retired as a legal assistant in 2011.</p>

                              <p>In 2007 I agreed to translate a history of the Catholic Church in the Russian Far East
                                for the benefit of a Roman Catholic Mission in Vladivostok, Russia. The Mission published
                                the translation under the title <em>Harsh Vineyard: A History of the Catholic Church in the
                                  Russian Far East</em> (Trafford, 2008). I continue to translate short articles for the Mission’s
                                newsletter from time to time.</p>
                            </EuiText>
                          </EuiPanel>
                        </EuiAccordion>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                    <EuiSpacer size="m" />
                    <p><strong>From the Hesburgh Libraries, University of Notre Dame:</strong></p>
                    <p><strong>Project Leader: </strong>Natasha Lyandres, Head, Rare Books and Special Collections Department, Russian and East European Studies Librarian.</p>
                    <p><strong>Project Catalogers: </strong> Bozena Karol and Pamela Brzezinski</p>
                    <p><strong>Project Developers: </strong> Robert Fox and Andy Wetherill</p>
                    <p><strong>Project Digital and Metadata Consultants: </strong>Tracy Bergstrom, Co-Director, Program for Digital Library Initiatives and Scholarship; Mary McKeown, Principal Cataloger; Alex Papson, Metadata Librarian.</p>
                    <p><strong>Special Thanks to: </strong>Alan Krieger, Theology/Philosophy Librarian; Jean McManus, Catholic Studies Librarians.</p>
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </Layout>
  )
}

export const Head = ({ data }: PageProps<SiteProps>) => {
  const { title, description } = data.site.siteMetadata

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  )

}

export default AboutPage;
