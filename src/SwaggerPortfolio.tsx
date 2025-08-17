import React, { useState } from 'react'
import portfolioSpec from './portfolioSpec'

function SocialIcon({ label }: { label: string }) {
	const lower = label.toLowerCase()
	if (lower.includes('github')) {
		return (
			<svg className="su-social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.93.68 1.88 0 1.36-.01 2.46-.01 2.8 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
		)
	}
	if (lower.includes('linkedin')) {
		return (
			<svg className="su-social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.5 16H7v-7h2.5v7ZM8.25 10A1.25 1.25 0 1 1 8.25 7.5 1.25 1.25 0 0 1 8.25 10ZM20 19h-2.5v-3.65c0-2.19-2.5-2.02-2.5 0V19H12.5v-7H15v1.12c1.16-2.15 5-2.31 5 2.06V19Z"/></svg>
		)
	}
	if (lower.includes('leetcode')) {
		return (
			<svg className="su-social-icon" viewBox="0 0 24 24" aria-hidden="true">
			<path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
			</svg>
		)
	}
	if (lower.includes('email')) {
		return (
		  <svg className="su-social-icon" viewBox="0 0 24 24" aria-hidden="true">
			<path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8l8 5 8-5v10H4Z"/>
		  </svg>
		)
	}
	return null
}

function TopBar() {
	const { name, version } = portfolioSpec.info
	return (
		<div className="su-topbar">
			<div className="su-topbar-wrapper">
				{/* Left: Title + Version */}
				<div className="su-spec">
					<span className="su-spec-title">{name}</span>
					<span className="su-spec-badge">{version}</span>
				</div>

				{/* Right: Social links + Resume Button */}
				<div className="su-socials">
					{portfolioSpec.info.links?.map((l) => (
						<a
							key={l.label}
							className="su-social-link"
							href={l.url}
							target="_blank"
							rel="noreferrer"
							aria-label={l.label}
							title={l.label}
						>
							<SocialIcon label={l.label} />
						</a>
					))}
					{portfolioSpec.info.email && (
						<a
							className="su-social-link"
							href={`mailto:${portfolioSpec.info.email}`}
							aria-label="Email"
							title="Email"
						>
							<SocialIcon label="Email" />
						</a>
					)}

					{/* Resume Button */}
					<button 
						onClick={() => window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank")}
						className="resume-btn"
					>
						Resume 📄
					</button>
				</div>
			</div>
		</div>
	)
}

type OpProps = {
	method: 'GET'
	path: string
	summary: string
	children: React.ReactNode
  response?: unknown
}

function OpBlock({ method, path, summary, children, response }: OpProps) {
	const [open, setOpen] = useState(false)
	const [tab, setTab] = useState<'curl' | 'js'>('curl')
	const [tryOutResult, setTryOutResult] = useState<unknown | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://example.com'
	const url = `${baseUrl}${path}`
	const codeCurl = `curl -s ${url}`
	const codeJs = `await fetch('${url}').then(r => r.json())`
	const copy = async (text: string) => {
		try { await navigator.clipboard.writeText(text) } catch {}
	}
	const renderSchema = (obj: unknown) => {
		if (!obj || typeof obj !== 'object') return null
		const entries = Object.entries(obj as Record<string, unknown>)
		return (
			<ul className="schema-list">
				{entries.map(([k, v]) => (
					<li key={k} className="schema-row">
						<span className="schema-key">{k}</span>
						<span className="schema-type">{Array.isArray(v) ? 'array' : typeof v}</span>
					</li>
				))}
			</ul>
		)
	}

	const handleTryItOut = async () => {
		setIsLoading(true);
	  
		// Simulate API call (replace with fetch(url) if real API exists)
		setTimeout(() => {
		  setTryOutResult(response); // Use the existing "response" prop
		  setIsLoading(false);
		}, 800);
	  };

	return (
		<div className={`opblock opblock-${method.toLowerCase()}`}>
			<button className="opblock-summary" onClick={() => setOpen((v) => !v)}>
				<span className={`opblock-summary-method`}>{method}</span>
				<span className="opblock-summary-path">{path}</span>
				<span className="opblock-summary-description">{summary}</span>
				<span className={`opblock-arrow ${open ? 'is-open' : ''}`}>▾</span>
			</button>
			{open && (
				<div className="opblock-body">
					{tryOutResult !== null && children}
					<div className="tryout-row">
						<button
							className="tryout-btn"
							onClick={handleTryItOut}
						>
							Try It Out
						</button>
						{isLoading && <span className="ml-2 text-yellow-400">Loading...</span>}
					</div>
					{ tryOutResult !== null && (
						<div className="response-box mt-3">
							<div className="response-head">
								<span>Response 200</span>
								<span className="status-badge">application/json</span>
							</div>
							<div className="response-body">
								<pre className="code-pre">{JSON.stringify(tryOutResult, null, 2)}</pre>
							</div>
						</div>
					)}
					<div className="code-samples">
						<div className="code-tabs">
							<div className={`code-tab ${tab === 'curl' ? 'active' : ''}`} onClick={() => setTab('curl')}>cURL</div>
							<div className={`code-tab ${tab === 'js' ? 'active' : ''}`} onClick={() => setTab('js')}>JavaScript</div>
						</div>
						<div className="code-block">
							<pre className="code-pre">{tab === 'curl' ? codeCurl : codeJs}</pre>
							<button className="copy-btn" onClick={() => copy(tab === 'curl' ? codeCurl : codeJs)}>Copy</button>
						</div>
					</div>
					{response ? (
						<div className="schema-box">
							<div className="schema-head">Schema</div>
							{renderSchema(response)}
						</div>
					) : null}
				</div>
			)}
		</div>
	)
}

export default function SwaggerPortfolio() {
	const { info, experience, projects, education } = portfolioSpec as typeof portfolioSpec & { education: any[] }

	const overviewResponse = { title: info.title, summary: info.summary }
	const skillsResponse = { skills: info.skills }
	const experienceResponse = { experience: experience.map(({ company, role, period, location }) => ({ company, role, period, location })) }
	const projectsResponse = { projects: projects.map(({ name, description, tech }) => ({ name, description, tech })) }
	const contactResponse = { email: info.email, links: info.links }
	const educationResponse = { education: education.map(({ institution, degree, period, location }) => ({ institution, degree, period, location })) }

	return (
		<div className="sp-root">
			<TopBar />
			<main className="su-container">
				<section className="su-info">
					<div className="su-info-inner">
						{info.avatarUrl && (
							<img className="su-avatar" src={info.avatarUrl} alt={info.name} />
						)}
						<div>
							<p className="su-info-desc">{info.summary}</p>
						</div>
					</div>
				</section>

				{/* <OpBlock method="GET" path="/overview" summary="About me" response={overviewResponse}>
					<div className="sp-paragraph">{info.summary}</div>
				</OpBlock> */}

				{info.skills && Object.keys(info.skills).length > 0 ? (
					<OpBlock method="GET" path="/skills" summary="Skills" response={skillsResponse}>
						<div className="sp-skills">
						{Object.entries(info.skills).map(([category, items]) => (
							<div key={category} className="sp-skill-category">
							<strong>{category}:</strong> {items.join(", ")}
							</div>
						))}
						</div>
					</OpBlock>
					) 
				: null}

				<OpBlock method="GET" path="/experience" summary="Work history" response={experienceResponse}>
					<div className="sp-list">
						{experience.map((exp) => (
							<div key={`${exp.company}-${exp.role}-${exp.period}`} className="sp-item">
								<div className="sp-item-header">
									<div className="sp-item-title">
										<span className="sp-item-role">{exp.role}</span>
										<span className="sp-sep">@</span>
										<span className="sp-item-company">{exp.company}</span>
									</div>
									<div className="sp-item-meta">
										<span>{exp.period}</span>
										{exp.location && <span className="sp-dot" />}
										{exp.location && <span>{exp.location}</span>}
									</div>
								</div>
								<p className="sp-paragraph">{exp.summary}</p>
								{exp.achievements?.length ? (
									<ul className="sp-ul">
										{exp.achievements.map((a) => (
											<li key={a}>{a}</li>
										))}
									</ul>
								) : null}
								{(exp.tech?.length || exp.links?.length) ? (
									<div className="sp-item-footer">
										{exp.tech?.length ? (
											<div className="sp-badge-list">
												{exp.tech.map((t) => (
													<span key={t} className="sp-chip">{t}</span>
												))}
											</div>
										) : null}
										{exp.links?.length ? (
											<div className="sp-link-list">
												{exp.links.map((l) => (
													<a key={l.label} className="sp-inline-link" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
												))}
											</div>
										) : null}
									</div>
								) : null}
							</div>
						))}
					</div>
				</OpBlock>

				<OpBlock method="GET" path="/projects" summary="Projects" response={projectsResponse}>
					<div className="sp-list">
						{projects.map((p) => (
							<div key={p.name} className="sp-item">
								<div className="sp-item-header">
									<div className="sp-item-title">
										<span className="sp-item-company">{p.name}</span>
									</div>
								</div>
								<p className="sp-paragraph">{p.description}</p>
								{p.highlights?.length ? (
									<ul className="sp-ul">
										{p.highlights.map((h) => (
											<li key={h}>{h}</li>
										))}
									</ul>
								) : null}
								{(p.tech?.length || p.links?.length) ? (
									<div className="sp-item-footer">
										{p.tech?.length ? (
											<div className="sp-badge-list">
												{p.tech.map((t) => (
													<span key={t} className="sp-chip">{t}</span>
												))}
											</div>
										) : null}
										{p.links?.length ? (
											<div className="sp-link-list">
												{p.links.map((l) => (
													<a key={l.label} className="sp-inline-link" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
												))}
											</div>
										) : null}
									</div>
								) : null}
							</div>
						))}
					</div>
				</OpBlock>

				<OpBlock method="GET" path="/education" summary="Education" response={educationResponse}>
					<div className="sp-list">
						{education.map((e) => (
							<div key={`${e.institution}-${e.degree}-${e.period}`} className="sp-item">
								<div className="sp-item-header">
									<div className="sp-item-title">
										<span className="sp-item-company">{e.institution}</span>
									</div>
									<div className="sp-item-meta">
										<span>{e.degree}</span>
										<span className="sp-dot" />
										<span>{e.period}</span>
										{e.location && (<><span className="sp-dot" /><span>{e.location}</span></>)}
									</div>
								</div>
								{e.courses?.length ? (
									<ul className="sp-ul">
										{e.courses.map((c: string) => (
											<li key={c}>{c}</li>
										))}
									</ul>
								) : null}
								{e.links?.length ? (
									<div className="sp-link-list">
										{e.links.map((l: any) => (
											<a key={l.label} className="sp-inline-link" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
										))}
									</div>
								) : null}
							</div>
						))}
					</div>
				</OpBlock>

				<OpBlock method="GET" path="/contact" summary="Contact" response={contactResponse}>
					<div className="sp-badge-list">
						{info.email && (
							<a className="sp-pill" href={`mailto:${info.email}`}>Email</a>
						)}
						{info.links?.map((l) => (
							<a key={l.label} className="sp-pill" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
						))}
					</div>
				</OpBlock>
			</main>
		</div>
	)
}


