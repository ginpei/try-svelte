export function setFirstFocus(el: Element): void {
  const autofocus = findAutofocus(el);
  if (autofocus) {
    autofocus.focus();
    return;
  }

  const els = Array.from(findFocusables(el));
  for (const el of els) {
    if (isFirstFocusable(el)) {
      el.focus();
      break;
    }
  }
}

export function moveFocus(el: Element, reversed: boolean): void {
  const { activeElement } = el.ownerDocument;
  if (
    !activeElement ||
    !(activeElement instanceof HTMLElement) ||
    !isDiscendant(el, activeElement)
  ) {
    setFirstFocus(el);
    return;
  }

  const focusables = Array.from(findFocusables(el));
  const curIndex = focusables.indexOf(activeElement);

  const direction = reversed ? -1 : +1;
  const nextIndex = (focusables.length + curIndex + direction) % focusables.length;

  const nextFocusable = focusables[nextIndex];
  nextFocusable.focus();
}

function findAutofocus(el: Element): HTMLElement | null {
  return el.querySelector('[autofocus]');
}

function findFocusables(el: Element): NodeListOf<HTMLElement> {
  return el.querySelectorAll("input:not([type='hidden']), textarea, select, button, :link, [tabindex]:not([tabindex='-1'])");
}

function isFirstFocusable(el: HTMLElement): boolean {
  if (el.classList.contains("Dialog--no-first-focusable")) {
    return false;
  }

  return true;
}

function isDiscendant(root: Node, target: Node): boolean {
  for (let cur: Node | null = target; cur; cur = cur.parentNode) {
    if (cur === root) {
      return true;
    }
  }

  return false;
}
