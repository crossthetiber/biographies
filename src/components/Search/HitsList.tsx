import React from "react"
import { HitsSuggestor, SearchkitResponse } from "@searchkit/sdk/lib/esm"
import {
	EuiAccordion,
	EuiFlexGrid,
	EuiFlexItem,
	EuiLink,
	EuiPanel,
	EuiSpacer,
	EuiSplitPanel,
	EuiText,
	EuiListGroup,
	EuiListGroupItem,
	EuiFlexGroup
} from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'

export const HitsList = (response: SearchkitResponse) => (
	<EuiFlexGrid>
		{
			response.hits?.items.map((hit) => (
				<EuiFlexItem key={hit.id}>
					<EuiLink href={"/biographies/" + hit.fields.uid}>
						<h6>{hit.fields.title}</h6>
					</EuiLink>
					{/* <EuiSplitPanel.Outer grow direction="row" hasBorder={false} hasShadow={false}> */}
					<EuiSplitPanel.Outer grow direction="row" hasBorder={false} hasShadow={false}>
						<EuiFlexGroup gutterSize="xs" direction="row" alignItems="stretch">
							<EuiFlexItem grow={4}>
								<EuiSplitPanel.Inner className="descriptionPanel" paddingSize="s">
									<EuiSpacer size="s" />
									<EuiText className="bump">
										<span style={{ fontWeight: 'bold' }}>Gender: </span>
										{hit.fields.gender}
									</EuiText>
									<EuiText className="bump">
										<span style={{ fontWeight: 'bold' }}>Vocation: </span>
										{hit.fields.vocation}
									</EuiText>
									<EuiText className="bump">
										<span style={{ fontWeight: 'bold' }}>Status: </span>
										{hit.fields.status}
									</EuiText>
								</EuiSplitPanel.Inner>
							</EuiFlexItem>
							<EuiFlexItem grow={6}>
								<EuiSplitPanel.Inner className="attributesPanel">
									<EuiSpacer size="s" />
									<EuiAccordion id="accordion1" buttonContent="Description" paddingSize="s">
										<EuiPanel paddingSize="none" hasShadow={false} hasBorder={false} className="meta">
											<EuiText>
												{hit.fields.description}
											</EuiText>
										</EuiPanel>
									</EuiAccordion>
									<EuiAccordion id="accordion2" buttonContent="Locations" paddingSize="xs">
										<EuiPanel paddingSize="none" hasShadow={false} hasBorder={false} className="meta">
											<EuiListGroup gutterSize="none" bordered={false} flush={true} size="m">
												{hit.fields.locations.map((location: string) => (
													<EuiListGroupItem label={location} iconType={"globe"} />
												))}
											</EuiListGroup>
										</EuiPanel>
									</EuiAccordion>
									<EuiAccordion id="accordion2" buttonContent="Names and Aliases" paddingSize="xs">
										<EuiPanel paddingSize="none" hasShadow={false} hasBorder={false} className="meta">
											<EuiListGroup gutterSize="none" bordered={false} flush={true}>
												{hit.fields.names.map((name: string) => (
													<EuiListGroupItem label={name} size="m" iconType={"shard"} />
												))}
											</EuiListGroup>
										</EuiPanel>
									</EuiAccordion>
								</EuiSplitPanel.Inner>
							</EuiFlexItem>
						</EuiFlexGroup>
					</EuiSplitPanel.Outer>
				</EuiFlexItem>
			))
		}
	</EuiFlexGrid>
)