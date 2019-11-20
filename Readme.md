# DNS for Kimmo Ahokas #

This repository contains DNS records for my personal domains. It uses [DNSControl](https://stackexchange.github.io/dnscontrol/) to manage DNS records in multiple different providers. GitHub automations are used to verify the validity of records and to push changes automatically to production.

## Basic workflow ##

1. Install DNScontrol: `brew install dnscontrol`.
2. Ensure that `creds.json` exists and contains valid credentials to AWS Route53.
3. Create new branch for changes.
4. Modify the records. See [DNSControl DSL](https://stackexchange.github.io/dnscontrol/js) for syntax.
5. Run

    ```bash
    dnscontrol check
    dnscontrol preview
    ```

6. Verify there are no errors and that the changes are correct.
7. Commit, push and create PR.
8. Check from GitHub PR that all checks passed.
9. Merge PR to master
10. Check from GitHub actions that push to prod was successful.

## Improvement ideas ##

- git hook, don't allow broken commits
- [status badge](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow#adding-a-workflow-status-badge-to-your-repository)
- better reporting to pull request
- some basic tests
